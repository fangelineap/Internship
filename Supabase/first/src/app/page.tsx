import Articles from "@/components/Articles";
import readUserSession from "@/lib/actions";
import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const Home = async () => {
    const { data } = await readUserSession();

    if (!data.session) {
        return redirect("/login");
    }

    const logout = async () => {
        "use server";
        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut();
        redirect("/login");
    };

    return (
        <div className="container mx-auto my-8">
            <Articles />
            <form action={logout}>
                <button type="submit" className=" m-2 px-2 py-1 bg-blue-500 text-white cursor-pointer">
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Home;