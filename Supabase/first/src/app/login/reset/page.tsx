import { sendResetPass } from "@/app/auth-server-action/actions";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
    const resetPassword = async (form: FormData) => {
        "use server";
        const result = await sendResetPass(form);
        const { error, data } = JSON.parse(result);
        if(data) redirect('/alert');
        if(error) console.log(error);
    };

    return (
        <div className="container mx-auto w-[400px]">
            <div className="container mx-auto w-[400px] grid gap-4">
                <form action={resetPassword} name="resetForm">
                    <div className="grid gap-4">
                        <div className="grid">
                            <label>Email</label>
                            <input type="email" name="email" className="text-black" />
                        </div>
                        <div>
                            <button
                                formTarget="resetForm"
                                className="px-4 py-2 w-full bg-blue-500 rounded cursor-pointer"
                            >
                                Reset Password
                            </button>
                        </div>
                    </div>
                </form>
                <form action={async () => {
                    "use server"
                    redirect('/login');
                }}>
                    <button type="submit" className="px-4 py-2 bg-gray-500 w-full rounded cursor-pointer">Login</button>
                </form>
            </div>
        </div>
    );
};

export default page;
