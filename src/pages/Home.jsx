import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
    const { user, login, logout, darkMode, toggleTheme } = useContext(AuthContext);

    const darkModelStyle = {
        backgroundColor: darkMode ? "#222" : "#eee",
        color: darkMode ? "white" : "black",
        height: "auto",
        textAlign: "center",
        padding: "20px",
    };
    return (
        <>
            <Header />
            <main>
                <div style={darkModelStyle} className="w-full">
                    <div className="h-10 flex justify-end items-center border rounded-lg w-20">
                        <button onClick={toggleTheme}>{darkMode ? "Dark 🌙" : "Light ☀️"}</button>
                    </div>

                    <hr className="my-5" />

                    <h2>Inicia sesión para continuar</h2>
                    <Link to="/Login">
                        <button onClick={() => login("Henry")} className="w-40 h-10 bg-blue-700 rounded-lg text-white font-semibold mt-5">
                            Login
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
