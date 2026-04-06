import { Link } from "react-router-dom";
import Home from "../pages/Home";

function Header() {
    return (
        <>
            <div className="mx-5">
                <nav className="h-15 flex justify-between items-center md:px-20">
                    <Link to="/Home">
                        <div className="flex justify-between items-center gap-2">
                            <img className="w-5 h-5" src="/rocket-launch-icon.svg" alt="Logo" />
                            <p>SaaS Dash</p>
                        </div>
                    </Link>
                    <Link to="/Login">
                        <div>
                            <p>Login</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default Header;
