import { supabase } from "@/lib/supabase";
import { useState } from "react"

export const useArticles = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [votes, setVotes] = useState<any[]>([]);

    const getArticles = async () => {
        const { data, error } = await supabase
        .from('articles')
        .select('*, votes(*)');

        if(data) setArticles(data);
        if(error) console.log(error);

        console.log(data);
    }

    const subscribeToArticles = () => {
        supabase
        .channel("articles_follor_up")
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
    }

    const newVote = async (articleid: number, remove: boolean = false) => {
        const {
            data: { session },
        } = await supabase.auth.getSession();

        if (!session) return alert("You are not authenticated.");

        const {
            user: { id },
        } = session!;

        if (remove) {
            const { data, error } = await supabase.from("votes").delete().eq("article_id", articleid).eq("user_id", id);

            return;
        }

        const { data, error } = await supabase
            .from("votes")
            .insert({
                article_id: articleid,
                user_id: id,
            })
            .select()
            .single();

        setVotes((prev: any) => ({ ...prev, data }));

        console.log(votes);
    };

    return {
        articles,
        getArticles,
        subscribeToArticles,
        newVote
    }
}