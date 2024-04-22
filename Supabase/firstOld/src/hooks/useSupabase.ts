// functional logic hooks

import { supabase } from "@/lib/supabase";

export const useSupabase = () => {
    // get and set session
    const getSession = async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession();

        const { access_token, refresh_token } = session!;
        await supabase.auth.setSession({ access_token,  refresh_token});

        return session;
    };

    // refresh session
    const refreshSession = async () => {
        const {
            data: { session },
        } = await supabase.auth.refreshSession();

        return session;
    };

    // set session
    const setSession = async (access_token: string, refresh_token: string) => {
        const {
            data: { session },
        } = await supabase.auth.setSession({
            access_token,
            refresh_token,
        });

        return true;
    };

    return {
        getSession,
        refreshSession,
        setSession
    }
}