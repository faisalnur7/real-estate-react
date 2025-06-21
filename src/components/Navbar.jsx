import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../contexts/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.error(err.message);
        }
    };

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/properties">Properties</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </>
    );

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-1">
                    <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-white">
                        EliteLux Homes
                    </Link>
                </div>

                {/* Center Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 items-center flex-1 justify-center">
                    {navLinks}
                </ul>

                {/* Right Side: Auth + Theme */}
                <div className="hidden md:flex items-center gap-4 flex-1 justify-end text-gray-700 dark:text-gray-200">
                    {user ? (
                        <>
                            <NavLink to="/profile" className="hover:text-indigo-500">Profile</NavLink>
                            <button onClick={handleLogout} className="hover:text-red-500">Logout</button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            className="px-4 py-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                        >
                            Login
                        </NavLink>
                    )}
                    <label className="cursor-pointer flex items-center gap-1">
                        <input
                            type="checkbox"
                            className="toggle toggle-sm"
                            checked={darkMode}
                            onChange={toggleTheme}
                        />
                        <span className="text-sm">{darkMode ? "Dark" : "Light"}</span>
                    </label>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-3">
                    <label className="cursor-pointer">
                        <input
                            type="checkbox"
                            className="toggle toggle-sm"
                            checked={darkMode}
                            onChange={toggleTheme}
                        />
                    </label>
                    <button onClick={toggleMenu}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <ul className="md:hidden flex flex-col gap-3 px-4 pb-4 text-gray-700 dark:text-gray-200">
                    {navLinks}
                    {user ? (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={handleLogout} className="hover:text-red-500">Logout</button></li>
                        </>
                    ) : (
                        <li><Link to="/login">Login / Register</Link></li>
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
