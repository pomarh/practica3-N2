import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="mx-5">
                <nav className="h-15 flex justify-between items-center">
                    <div className="flex justify-between items-center gap-2">
                        <img className="w-5 h-5" src="/vite.svg" alt="Logo" />
                        <p>SaaS Dash</p>
                    </div>
                    <Link>
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
