import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware (req) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });

    // refreshing our session in cookie
    await supabase.auth.getSession();

    return res;
}