"use client";

import ArticleItem from "@/components/ArticleItem";
import { useArticles } from "@/hooks/useArticles";
import { useNavigation } from "@/hooks/useNavigation";
import { useSupabase } from "@/hooks/useSupabase";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
    const { router } = useNavigation();

    const { getSession } = useSupabase();
    const { articles, getArticles } = useArticles();

    // directly on page
    const subscribeArticle = supabase
        .channel("articles_follow_up")
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "articles",
            },
            (payload: any) => {
                console.log(payload);
            }
        )
        .subscribe();

    const unsubscribeChannel = () => {
        supabase.removeChannel(subscribeArticle);
    };

    const subscribeVotes = supabase
        .channel("articles_follow_up")
        .on(
            "postgres_changes",
            {
                event: "*",
                schema: "public",
                table: "votes",
            },
            async (payload: any) => {
                await getArticles();
            }
        )
        .subscribe();


    const logout = async () => {
        await supabase.auth.signOut();

        router.refresh();
    };

    useEffect(() => {
        getSession();
        getArticles();
    }, []);

    return (
        <div className="container mx-auto my-8">
            <button onClick={unsubscribeChannel} className="px-2 py-1 m-2 bg-red-600 text-white cursor-pointer">Unsubscribe</button>
            <div className="grid gap-4">
                {articles.map((article: any, key: number) => (
                    <ArticleItem key={key} article={article}/>
                ))}
            </div>
            <button onClick={logout} className=" m-2 px-2 py-1 bg-blue-500 text-white cursor-pointer">
                Logout
            </button>
        </div>
    );
}
