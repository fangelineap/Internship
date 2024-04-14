"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";

const Login = () => {
    const router = useRouter();
    const [userData, setUserData] = useState<{
        email: string;
        password: string;
    }>({ email: "", password: "" });

    const [resetPass, setResetPass] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const sendResetPass = async () => {
        try {
            await supabase
            .auth
            .resetPasswordForEmail(userData.email, {
                redirectTo: `${window.location.href}reset`
            })

            setSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async () => {
        try {
            let { data, error } = await supabase.auth.signInWithOtp({
                email: userData.email,
                options: {
                    shouldCreateUser: true,
                },
            });

            if (data) {
                setSuccess(true);
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container mx-auto w-[400px] grid gap-4">
            {!resetPass && (
                <div className="grid gap-4">
                    <div className="grid">
                        <label>Email</label>
                        <input type="email" name="email" onChange={handleChange} className="text-black" />
                    </div>
                    {success && (
                        <div className="bg-green-100 text-green-600 px-2 rounded">
                            An email has been sent to {userData.email}.
                        </div>
                    )}
                    {/* <div className="grid">
                        <label>Password</label>
                        <input type="password" name="password" onChange={handleChange} className="text-black" />
                    </div> */}
                    <div>
                        <button onClick={login} className="px-4 py-2 bg-blue-500 rounded cursor-pointer">
                            Login
                        </button>
                    </div>
                </div>
            )}
            {resetPass && (
                <div className="grid gap-4">
                    <div className="grid">
                        <label>Email</label>
                        <input type="email" name="email" onChange={handleChange} className="text-black" />
                    </div>
                    {success && (
                        <div className="bg-green-100 text-green-600 px-2 rounded">
                            Success! Check your email to reset your password.
                        </div>
                    )}
                    <div>
                        <button className="px-4 py-2 bg-blue-500 rounded cursor-pointer" onClick={sendResetPass}>
                            Reset Password
                        </button>
                    </div>
                </div>
            )}
            <p className="cursor-pointer hover:underline" onClick={() => setResetPass(!resetPass)}>
                {resetPass ? "Login" : "Reset password"}
            </p>
        </div>
        // <div className="container mx-auto w-[400px]">
        //     <div className="grid">
        //         <label>Email</label>
        //         <input type="email" name="email" onChange={handleChange} className="text-black" />
        //     </div>
        //     <div className="grid">
        //         <label>Password</label>
        //         <input type="password" name="password" onChange={handleChange} className="text-black" />
        //     </div>
        //     {/* { success && <div className="my-4 bg-green-100 px-2 text-green-600">An email has been sent to {userData.email}</div>} */}
        //     <div>
        //         <button onClick={login} className="px-4 py-2 bg-blue-500 rounded cursor-pointer">Login</button>
        //     </div>
        // </div>
    );
};

export default Login;
