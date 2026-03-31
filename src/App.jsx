import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { HashRouter } from "react-router-dom";
import Login from "./pages/Login";

function App() {
    return (
        <>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/Login"} element={<Login />}></Route>
                </Routes>
                <Footer />
            </HashRouter>
        </>
    );
}

export default App;
