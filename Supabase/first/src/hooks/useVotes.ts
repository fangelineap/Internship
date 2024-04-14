import { supabase } from "@/lib/supabase";
import { useState } from "react";

export const useVotes = () => {
    const [votes, setVotes] = useState<any[]>([]);

    const getVotes = async () => {
        const { data, error } = await supabase.from("votes").select("*");

        if (data) setVotes(data);
        if (error) console.log(error);
    };

    // const newVote = async (articleid: number, remove: boolean = false) => {
    //     const {
    //         data: { session },
    //     } = await supabase.auth.getSession();

    //     if (!session) return alert("You are not authenticated.");

    //     const {
    //         user: { id },
    //     } = session!;

    //     if (remove) {
    //         const { data, error } = await supabase.from("votes").delete().eq("article_id", articleid).eq("user_id", id);

    //         return;
    //     }

    //     const { data, error } = await supabase
    //         .from("votes")
    //         .insert({
    //             article_id: articleid,
    //             user_id: id,
    //         })
    //         .select()
    //         .single();

    //     setVotes((prev: any) => ({ ...prev, data }));

    //     console.log(votes);
    // };

    return {
        votes,
        getVotes,
        // newVote,
    };
};
