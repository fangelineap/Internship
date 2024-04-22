"use server";

import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signUpWithemailAndPassword(form: FormData) {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.auth.signUp({
        email: form.get("email")?.toString()!,
        password: form.get('email')?.toString()!,
        options: {
            emailRedirectTo: `http://localhost:3000/auth-server-action/callback`
        }
    });

    return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(form: FormData) {
    const supabase = await createSupabaseServerClient();

    const result = await supabase.auth.signInWithPassword({
        email: form.get("email")?.toString()!,
        password: form.get("password")?.toString()!,
    });

    return JSON.stringify(result);
}

export async function signInWithOtp(form: FormData) {
    const supabase = await createSupabaseServerClient();

    const result = await supabase.auth.signInWithOtp({
        email: form.get("email")?.toString()!,
        options: {
            shouldCreateUser: true,
            emailRedirectTo: `http://localhost:3000/auth-server-action/callback`,
        },
    });

    return JSON.stringify(result);
}

export async function sendResetPass(form: FormData) {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.auth.resetPasswordForEmail(form.get("email")?.toString()!, {
        redirectTo: `http://localhost:3000/reset`,
    });

    return JSON.stringify(result);
}

export async function resetPassword(password: string) {
    const supabase = await createSupabaseServerClient();

    const result = await supabase.auth.updateUser({
        password: password,
    });

    if (result.data.user) redirect("/");

    return JSON.stringify(result);
}
