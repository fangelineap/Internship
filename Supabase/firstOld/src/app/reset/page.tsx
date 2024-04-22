"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { supabase } from "@/lib/supabase";
import React, { useState } from "react";

const Reset = () => {
    const { router } = useNavigation();

    const [userData, setUserData] = useState<{
        password: string;
        confirmPassword: string;
    }>({ password: "", confirmPassword: "" });

    const confirmPassword = async () => {
        const { password, confirmPassword } = userData;

        if(password !== confirmPassword) return alert(`Please double check your passwords`);

        const { data, error } = await supabase
        .auth
        .updateUser({
            password: userData.password,
        });

        if(data) router.push('/');
        if(error) console.log(error);
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container mx-auto w-[400px] grid gap-4">
            <div className="grid">
                <label>Enter your new password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={userData?.password} 
                    onChange={handleChange}
                    className="text-black"
                />
            </div>
            <div className="grid">
                <label>Confirm your new password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={userData?.confirmPassword}
                    onChange={handleChange}
                    className="text-black"
                />
            </div>

            <div>
                <button onClick={confirmPassword} className="px-4 py-2 bg-blue-500 rounded cursor-pointer">
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Reset;
