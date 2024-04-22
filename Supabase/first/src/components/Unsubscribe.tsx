'use client'

import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import React from "react";

const Unsubscribe = () => {
    const router = useRouter();

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const subscribedChannel = supabase.channel("articles_follow_up").on(
        "postgres_changes",
        {
            event: "*",
            schema: "public",
            table: "articles",
        },
        (payload: any) => {
            console.log(payload);
            router.refresh();
        }
    )
    .subscribe();

    const unsubscribe = async () => {
        const res = await subscribedChannel.unsubscribe();
        console.log(res);
    }

    return (
            <button onClick={unsubscribe} className="px-2 py-1 m-2 bg-red-600 text-white cursor-pointer">
                Unsubscribe
            </button>
    );
};

export default Unsubscribe;
