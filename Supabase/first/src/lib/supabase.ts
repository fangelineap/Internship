import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// if we are using auth-helpers-nextjs
export const supabase = createClientComponentClient();

// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export const adminSupabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
// );