import ArticleItem from "./ArticleItem";
import createSupabaseServerClient from "@/lib/supabase/server";
import Unsubscribe from "./Unsubscribe";

const Articles = async () => {
    // const supabase = createBrowserClient(
    //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    // );

    const getArticles = async () => {
        "use server";
        const supabase = await createSupabaseServerClient();
        const { data, error } = await supabase.from("articles").select("*, votes(*)");
        if (data) {
            return data;
        }
        if (error) console.log(error);
    };

    const articles = await getArticles();

    const genSupabase = async () => {
        "use server";
        return await createSupabaseServerClient();
    };

    const supabase = await genSupabase();

    return (
        <>
            <Unsubscribe />
            <div className="grid gap-4">
                {articles!.map((article: any, key: number) => (
                    <ArticleItem key={key} article={article} />
                ))}
            </div>
        </>
    );
};

export default Articles;
