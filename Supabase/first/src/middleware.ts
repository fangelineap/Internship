import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    // next is for next page
    const res = NextResponse.next();

    const publicUrls = ['/reset'];

    // to avoid middleware
    if(publicUrls.includes(req.nextUrl.pathname)) return res;

    const supabase = createMiddlewareClient({ req, res });

    const {
        data: { session }, error
    } = await supabase.auth.getSession();

    console.log('session',session);

    if(!session) {
        return NextResponse.rewrite(new URL('/login', req.url));
    }

    return res;
}

export const config = {
    // middleware runs w all except for api, static image, and favicon
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};