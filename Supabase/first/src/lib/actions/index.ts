"use server"

import createSupabaseServerClient from "../supabase/server";

export default async function readUserSession() {
    const supabase = await createSupabaseServerClient();
    const user = supabase.auth.getUser();

    return supabase.auth.getSession();
}

export async function getArticles() {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from('articles').select('*, votes(*)');

    return {
        data
    };
}

let channel: any = null;
export async function subscribeToArticles() {
    const supabase = await createSupabaseServerClient();
    console.log('AJKSDHASKDJHAKSJDHLAKSD');
    channel = supabase
    .channel('articles_follow_up')
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

export async function unsubscribeToArticles() {
    const supabase = await createSupabaseServerClient();
    await supabase.removeChannel(channel);
    channel = null;
    console.log('unsubscribed')
}

export async function makeNewVote (articleid: number, remove: boolean) {
    const supabase = await createSupabaseServerClient();
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

    const result = await supabase
        .from("votes")
        .insert({
            article_id: articleid,
            user_id: id,
        })
        .select()
        .single();

    return JSON.stringify(result);
}
export const subscribeVote = async () => {
    const supabase = await createSupabaseServerClient();
    supabase
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
}