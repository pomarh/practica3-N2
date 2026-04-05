import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <Header />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Profile">Profile</Link>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/Login"} element={<Login />}></Route>
                <Route path={"/Register"} element={<Register />}></Route>
                <Route path={"/Profile"} element={<Profile />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
