"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AlertPage = () => {
    const route = useRouter();

    return (
        <div className="container h-screen flex items-center mx-auto w-[400px]">
            <div className="container mx-auto w-[400px] grid gap-4">
                <div className="bg-green-100 text-green-600 p-5 rounded">
                    An email has been sent to your email address.
                </div>
                <button onClick={route.back} className="px-4 py-2 bg-blue-500 rounded cursor-pointer">
                    Back
                </button>
            </div>
        </div>
    );
};

export default AlertPage;
