import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import { sendResetPass, signInWithEmailAndPassword, signInWithOtp, signUpWithemailAndPassword } from "../auth-server-action/actions";

const Login = async () => {
    const { data } = await readUserSession();

    if (data.session) {
        return redirect("/");
    }

    const signUpWithEmailPassword = async (form: FormData) => {
        "use server"
        const result = await signUpWithemailAndPassword(form);
        const { data, error } = JSON.parse(result);
        if(data) redirect('/alert');
        if(error) console.log(error);
    }

    const loginWithOtp = async (form: FormData) => {
        "use server";
        const result = await signInWithOtp(form);
        const { error, data } = JSON.parse(result);
        if (data) {
            redirect("/alert");
        }
        if (error) console.log(error);
    };

    const loginWithPassword = async (form: FormData) => {
        "use server";
        const result = await signInWithEmailAndPassword(form);
        const { error, data } = JSON.parse(result);
        if (data) {
            console.log(data);
            return redirect("/");
        }
        if (error) console.log(error);
    };

    const resetPassword = async () => {
        "use server"
        redirect("/login/reset");
    };

    return (
        <div className="container mx-auto w-[400px]">
            <div className="container mx-auto w-[400px] grid gap-4">
                <form action={signUpWithEmailPassword} name="loginForm">
                    <div className="grid gap-4">
                        <div className="grid">
                            <label>Email</label>
                            <input type="email" name="email" className="text-black" />
                        </div>
                        <div className="grid">
                            <label>Password</label>
                            <input type="password" name="password" className="text-black" />
                        </div>
                        <div>
                            <button className="px-4 py-2 bg-blue-500 rounded cursor-pointer w-full">Sign Up</button>
                        </div>
                    </div>
                </form>
                <form action={resetPassword}>
                    <button type="submit" className="px-4 py-2 bg-gray-500 w-full rounded cursor-pointer">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
