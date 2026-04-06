import { createContext, useState } from "react";

export const AuthContext = createContext();
export const theme = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [darkMode, setDrakMode] = useState(false);

    // login/logout
    const login = (userName) => setUser({ name: userName });
    const logout = () => setUser(null);

    // funcion darkMode
    const toggleTheme = () => setDrakMode(!darkMode);

    return <AuthContext.Provider value={{ user, login, logout, darkMode, toggleTheme }}>{children}</AuthContext.Provider>;
}
