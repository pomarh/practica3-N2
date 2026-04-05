import { useState } from "react";

function Profile() {
    const [enabled, setEnabled] = useState(false);

    return (
        <>
            <main className="bg-gray-100   ">
                <div className="flex justify-between items-center bg-white m-4 md:w-12/12 md:m-0 md:p-5 md:px-10">
                    <div className="flex items-center gap-2">
                        <img className="w-8 h-8" src="/rocket-launch-icon.svg" alt="rocket launch" />
                        <p>SaaSFlow</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <img className="w-7 h-7" src="/avatar-icon.svg" alt="" />
                        </div>
                        <button className="flex items-center gap-1">
                            <img className="w-4 h-4" src="/logout-line-icon.svg" alt="" />
                            Log Out
                        </button>
                    </div>
                </div>
                <section className="bg-gray-100 p-4 md:px-50 lg:px-10">
                    <div>
                        <h2 className="text-3xl font-semibold">welcome back, alex</h2>
                        <p className="text-[16px] py-3 text-gray-500">Manege your account setting and preferrence here.</p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-5">
                        <form className="  bg-white p-4 border border-gray-300 rounded-lg" action="">
                            <div className="flex  items-center gap-2 mb-5">
                                <div className="w-10 h-10 bg-gray-200 rounded-lg flex justify-center items-center">
                                    <img className="w-5 h-5" src="/male-icon (1).svg" alt="" />
                                </div>
                                <h3 className="text-lg">Profile settings</h3>
                            </div>
                            <label htmlFor="">Full name</label>
                            <input
                                className=" w-12/12 h-12 bg-with rounded-lg border border-gray-300 px-2 mb-5"
                                type="text"
                                placeholder="Full name"
                            />
                            <label htmlFor="">Email address</label>
                            <input
                                className=" w-12/12 h-12 bg-with rounded-lg border border-gray-300 px-2 mb-5"
                                type="email"
                                placeholder="example@example.com"
                            />
                            <div className="flex justify-end">
                                <button className="w-35 h-10 bg-blue-700 text-white capitalize rounded-lg">save changes</button>
                            </div>
                        </form>
                        <div className=" bg-white p-4 border border-gray-300 rounded-lg mt-8 lg:mt-0">
                            <div className="flex  items-center gap-2 mb-5">
                                <div className="w-10 h-10 bg-gray-200 rounded-lg flex justify-center items-center">
                                    <img className="w-5 h-5" src="/setting-icon.svg" alt="" />
                                </div>
                                <h3 className="text-lg capitalize">app preference</h3>
                            </div>
                            <div className=" flex justify-between items-center">
                                <div>
                                    <p className="font-bold capitalize">appearance</p>
                                    <p className="text-gray-500">Switch between light and dark themes</p>
                                </div>
                                <div className="w-82 h-14 p-2 flex items-center gap-2 bg-gray-200 rounded-lg lg:w-52 lg:gap-5">
                                    <button className="flex items-center gap-2 bg-white p-2">
                                        <img className="w-5 h-5" src="/day-sunny-icon.svg" alt="" />
                                        Light
                                    </button>
                                    <button className="flex items-center gap-2 ">
                                        <img className="w-5 h-5" src="/moon-icon.svg" alt="" />
                                        Dark
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <p className=" font-bold capitalize">email notifications</p>
                                    <p className="text-gray-500">receive weekly analytics reports</p>
                                </div>
                                <label className="inline-flex items-center cursor-pointer ml-10" htmlFor="">
                                    <input className="sr-only peer" type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} />
                                    <div className="relative w-11 h-6 bg-blue-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <p className=" font-bold capitalize">two-factor authentication</p>
                                    <p className="text-gray-500">secure your account with 2FA</p>
                                </div>
                                <button className="w-20 h-8 bg-gray-200 rounded-lg font-semibold">Enable</button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-8 text-gray-300" />
                    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3">
                        <div className="bg-white flex items-center gap-2 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 bg-gray-200 flex justify-center items-center rounded-[5px] ml-2 my-2">
                                <img className="w-6 h-6" src="/banknote-icon.svg" alt="" />
                            </div>
                            <div className="pl-2">
                                <p className="font-bold text-lg">Billing</p>
                                <p className="text-gray-500 text-[12px]">invoices and plants</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center gap-2 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 bg-gray-200 flex justify-center items-center rounded-[5px] ml-2 my-2">
                                <img className="w-6 h-6" src="/compass-icon (1).svg" alt="" />
                            </div>
                            <div className="pl-2">
                                <p className="font-bold text-lg">API Keys</p>
                                <p className="text-gray-500 text-[12px]">manage integrations</p>
                            </div>
                        </div>
                        <div className="bg-white flex items-center gap-2 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 bg-gray-200 flex justify-center items-center rounded-[5px] ml-2 my-2">
                                <img className="w-6 h-6" src="/group-icon.svg" alt="" />
                            </div>
                            <div className="pl-2">
                                <p className="font-bold text-lg">Team </p>
                                <p className="text-gray-500 text-[12px]">groups</p>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="flex justify-around items-center m-5 pb-5">
                    <div className="flex flex-col items-center hover:text-blue-700">
                        <img className="w-7 h-7" src="/categories-icon.svg" alt="" />
                        <p className="text-[10px]">Dashboard</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-blue-700">
                        <img className="w-7 h-7" src="/column-chart-icon.svg" alt="" />
                        <p className="text-[10px]">Dashboard</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-blue-700">
                        <img className="w-7 h-7" src="/setting-icon-black.svg" alt="" />
                        <p className="text-[10px]">Dashboard</p>
                    </div>
                    <div className="flex flex-col items-center hover:text-blue-700">
                        <img className="w-7 h-7" src="/avatar-icon.svg" alt="" />
                        <p className="text-[10px]">Dashboard</p>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default Profile;
