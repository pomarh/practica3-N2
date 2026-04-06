import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // datod del formulario de login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validEmail = "admin@test.com";
        const validPassword = "123";

        if (email === validEmail && password === validPassword) {
            const userAuth = {
                name: "Henry",
                email: email,
                role: "Admin",
                avatar: `/avatar-icon.svg`,
            };

            login(userAuth);
            navigate("/Profile");
        } else {
            setError(true);
            setTimeout(() => setError(false), 3000);
        }
    };
    return (
        <>
            <section className="p-7 md:px-50 lg:px-80">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-15 h-15 bg-blue-700 rounded-lg flex justify-center items-center">
                        <img className="w-8 h-8" src="/supabase-icon.svg" alt="" />
                    </div>
                    <h2 className="text-4xl font-bold">Wellcome back</h2>
                    <p className="text-lg text-gray-500 my-4">Please enter your details to sign in</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg animate-pulse">
                        <p className="text-red-700 text-sm font-medium">
                            Credenciales incorrectas. Prueba con: <br />
                            <span className="font-bold">admin@test.com / 123</span>
                        </p>
                    </div>
                )}

                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="text-lg flex justify-between mb-2" htmlFor="">
                        Email address
                    </label>
                    <input
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=" w-12/12 h-12 bg-with rounded-lg border border-gray-300 px-5 mb-5"
                        type="email"
                        placeholder="name@company.com"
                    />
                    <label className="text-lg flex justify-between mb-2" htmlFor="remember">
                        Password <span className="text-blue-700 font-bold">Fortgot password?</span>
                    </label>
                    <div className="flex relative">
                        <input
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" w-12/12 h-12 bg-with rounded-lg border border-gray-300 px-5 mb-5"
                            type="password"
                            placeholder="••••••••"
                        />
                        <img className="w-5 h-5 absolute right-5 top-3" src="/eye-look-icon.svg" alt="" />
                    </div>
                    <div className="text-lg flex gap-2">
                        <input className="w-5 " type="checkbox" />
                        <label htmlFor="">Remember for 30 days </label>
                    </div>

                    <button type="submit" className="w-12/12 h-12 bg-blue-700 font-semibold text-white rounded-lg mt-5">
                        Sign in
                    </button>
                </form>

                <div className="my-5 flex items-center">
                    <div className="grow border-t border-gray-400"></div>
                    <span className="mx-4 shrink text-gray-600 uppercase font-semibold">or continue with</span>
                    <div className="grow border-t border-gray-400"></div>
                </div>
                <div>
                    <button className="w-12/12 h-12 bg-with border border-gray-400 font-semibold rounded-lg flex justify-center items-center gap-5">
                        <img className="w-5 h-5" src="/google-color-icon.svg" alt="register google" />
                        Sign in with google
                    </button>
                </div>
            </section>
            <p className=" h-12 w-12/12 bg-gray-100 flex justify-center items-center gap-2">
                Don't have an account?{" "}
                <Link className="text-blue-700 font-semibold" to="/Register">
                    Create an account
                </Link>
            </p>
        </>
    );
}

export default Login;
