function Register() {
    return (
        <>
            <section className="p-7 md:px-50 lg:px-80">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-15 h-15 bg-gray-200 rounded-lg flex justify-center items-center">
                        <img className="w-8 h-8" src="/rocket-launch-icon.svg" alt="" />
                    </div>
                    <h2 className="text-4xl font-bold">Wellcome back</h2>
                    <p className="text-lg text-gray-500 my-4">Please enter your details to sign in</p>
                </div>

                <form className="flex flex-col" action="">
                    <label className="text-lg flex justify-between mb-2" htmlFor="">
                        Email address
                    </label>
                    <input
                        className=" w-12/12 h-12 bg-with rounded-lg border border-gray-300 px-5 mb-5"
                        type="email"
                        placeholder="name@company.com"
                    />
                    <label className="text-lg flex justify-between mb-2" htmlFor="">
                        Password <span className="text-blue-700 font-bold">Fortgot password?</span>
                    </label>
                    <div className="flex relative">
                        <input className=" w-12/12 h-12 bg-with rounded-lg border border-gray-300 px-5 mb-5" type="password" placeholder="••••••••" />
                        <img className="w-5 h-5 absolute right-5 top-3" src="/eye-look-icon.svg" alt="" />
                    </div>
                    <div className="text-lg flex gap-2">
                        <input className="w-5 " type="checkbox" />
                        <label htmlFor="">Remember for 30 days </label>
                    </div>
                    <button className="w-12/12 h-12 bg-blue-700 font-semibold text-white rounded-lg mt-5">Sign in</button>
                </form>

                <div className="my-5 flex items-center">
                    <div className="grow border-t border-gray-400"></div>
                    <span className="mx-4 shrink text-gray-600 uppercase font-semibold">or continue with</span>
                    <div className="grow border-t border-gray-400"></div>
                </div>
                <div>
                    <button className="w-12/12 h-12 bg-with border border-gray-400 font-semibold rounded-lg flex justify-center items-center gap-5">
                        <img className="w-5 h-5" src="/google-black-icon.svg" alt="register google" />
                        Sign in with google
                    </button>
                </div>
            </section>
            <p className=" h-12 w-12/12 bg-gray-100 flex justify-center items-center gap-2">
                Don't have an account? <button className="text-blue-700 font-semibold">Start free trial</button>
            </p>
        </>
    );
}

export default Register;
