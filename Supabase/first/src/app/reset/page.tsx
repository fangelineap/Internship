import React, { useState } from "react";
import { redirect } from "next/navigation";
import createSupabaseServerClient from "@/lib/supabase/server";

const Reset = async ({ searchParams: { code } }: { searchParams: { code: string }}) => {
    const confirmPassword = async (form: FormData) => {
        "use server";
        const supabase = await createSupabaseServerClient();

        if (form.get("password") === form.get("confirmPassword")) {
            if(code) {
                const { error } = await supabase.auth.exchangeCodeForSession(code);

                if(error) return;
            }

            const { data, error } = await supabase.auth.updateUser({
                 password: form.get('password')?.toString(),
            });

            if (data) {
                console.log("dataaa", data);
                redirect("/");
            }
            if (error) console.log(error);
        } else {
            return alert("Your passwords does not match");
        }
    };

    return (
        <form action={confirmPassword}>
            <div className="container mx-auto w-[400px] grid gap-4">
                <div className="grid">
                    <label>Enter your new password</label>
                    <input type="password" name="password" className="text-black" />
                </div>
                <div className="grid">
                    <label>Confirm your new password</label>
                    <input type="password" name="confirmPassword" className="text-black" />
                </div>

                <div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 rounded cursor-pointer">
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Reset;