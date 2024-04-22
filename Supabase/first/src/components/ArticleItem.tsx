import createSupabaseServerClient from "@/lib/supabase/server";
import { ArrowUp } from "./icons/up";
import { revalidatePath } from "next/cache";

export type Article = {
    id: number;
    created_at?: string;
    title: string;
    votes?: any[];
};

const ArticleItem = async ({ article: { title, id, votes } }: { article: Article }) => {
    const upVote = async () => {
        "use server";
        const supabase = await createSupabaseServerClient();

        const {
            data: { session },
        } = await supabase.auth.getSession();

        if (!session) return alert("You are not authenticated");

        const {
            user: { id: userId },
        } = session!;

        const { data, error } = await supabase
            .from("votes")
            .insert({
                article_id: id,
                user_id: userId,
            })
            .select()
            .single();

        revalidatePath("/");
    };

    const downVote = async () => {
        "use server";
        const supabase = await createSupabaseServerClient();

        const {
            data: { session },
        } = await supabase.auth.getSession();

        if (!session) return alert("You are not authenticated");

        const {
            user: { id: userId },
        } = session!;

        const { data, error } = await supabase
            .from("votes")
            .delete()
            .eq('article_id', id)
            .eq('user_id', userId);

        revalidatePath("/");
    };

    return (
        <div className="border flex px-4 py-3 items-center justify-between cursor-pointer hover:bg-gray-900">
            <h2>{title}</h2>
            <div className="grid items-center text-center">
                <form action={upVote}>
                    <button type="submit">
                        <ArrowUp />
                    </button>
                </form>
                <span>{votes?.length} votes</span>
                <form action={downVote}>
                    <button type="submit" className="rotate-180">
                        <ArrowUp />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ArticleItem;
