"use server";

import { readUserSession } from "@/lib/actions";
import { createSupabaseAdmin, createSupbaseServerClient } from "@/lib/supabase";
import { error } from "console";
import { revalidatePath, unstable_noStore } from "next/cache";

export async function createMember(data: {
    email: string;
    password: string;
    name: string;
    role: "user" | "admin";
    status: "active" | "resigned";
    confirm: string;
}) {

	const { data: userSession } = await readUserSession();
	if(userSession.session?.user.user_metadata.role !== "admin") {
		return JSON.stringify({ error: { message: "Only admin can create a new user!" } });
	}

    const supabase = await createSupabaseAdmin();

    // create acc
    const createResponse = await supabase.auth.admin.createUser({
        email: data.email,
		password: data.password,
		email_confirm: true,
		user_metadata: {
			role: data.role
		}
    });

	if(createResponse.error?.message) {
		return JSON.stringify(createResponse);
	}
	else {
		// add to member table
		const memberResponse = await supabase
		.from('member')
		.insert(
			{ name: data.name, 
				id: createResponse.data.user?.id 
			}
		);

		if(memberResponse.error?.message) {
			return JSON.stringify(memberResponse);
		}
		else {
			// create permisson
			const permissionResponse = await supabase
			.from('permission')
			.insert({
				role: data.role,
				status: data.status,
				member_id: createResponse.data.user?.id
			});

			revalidatePath('/dashboard/members');
			return JSON.stringify(permissionResponse);
		}
	}
}

export async function updateMemberById(id: string) {
    console.log("update member");
}

export async function deleteMemberById(user_id: string) {
	const { data: userSession } = await readUserSession();
	if(userSession.session?.user.user_metadata.role !== "admin") {
		return JSON.stringify({ error: { message: "Only admin can delete a user!" } });
	}

	const supabaseAdmin = await createSupabaseAdmin();

	const deleteResponse = await supabaseAdmin.auth.admin.deleteUser(user_id)
	if(deleteResponse.error?.message) {
		return JSON.stringify(deleteResponse);
	}
	else {
		const supabase = await createSupbaseServerClient();
		const response =  await supabase.from('member').delete().eq("id", user_id);
		revalidatePath('/dashboard/members');
		return JSON.stringify(response);
	}
}

export async function readMembers() {
	unstable_noStore();

	const supabase = await createSupbaseServerClient();
	return await supabase.from('permission').select('*,member(*)');
}
