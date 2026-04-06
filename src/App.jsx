import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/UserContext";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
    const { user } = useContext(AuthContext);
    return (
        <>
            {user && <Header />}
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Login"} element={<Login />}></Route>
                <Route path={"/Register"} element={<Register />}></Route>
                <Route path={"/Profile"} element={<Profile />}></Route>
            </Routes>
            {user && <Footer />}
        </>
    );
}

export default App;
