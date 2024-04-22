"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }

        getUser();
    }, []);

    const handleSignUp = async () => {
        const response = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });

        setUser(response.data.user);
        router.refresh();
        setEmail('');
        setPassword('');
    };

    const handleSignIn = async () => {
        const response = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setUser(response.data.user);
        router.refresh();
        setEmail('');
        setPassword('');
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        setUser(null);
    }

    console.log(loading, user);

    if(loading) {
        return <h1>Please wait...</h1>
    }

    if(user) {
        return (
            <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
                    <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
                        Hi! You're already logged in.
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    }

    return (
        <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 w-full p-3 rounded-md border
                border-gray-700 text-white
                bg-gray-800 focus:outline-none
                focus:border-blue-500"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 w-full p-3 rounded-md border
                border-gray-700 text-white
                bg-gray-800 focus:outline-none
                focus:border-blue-500"
                />
                <button
                    onClick={handleSignUp}
                    className="w-full mb-2 p-3 rounded-md bg-blue-700 
                text-white hover:bg-gray-600 focus:outline-none"
                >
                    Sign Up
                </button>
                <button
                    onClick={handleSignIn}
                    className="w-full p-3 rounded-md bg-gray-700 
                text-white hover:bg-gray-600 focus:outline-none"
                >
                    Sign In
                </button>
            </div>
        </main>
    );
};

export default Login;
