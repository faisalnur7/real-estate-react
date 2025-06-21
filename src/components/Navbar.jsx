import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../contexts/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        try {
            await logout();
            setIsOpen(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    const navLinks = (
        <>
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/properties" onClick={() => setIsOpen(false)}>Properties</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
        </>
    );

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
            <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-1">
                    <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-white" onClick={() => setIsOpen(false)}>
                        EliteLux Homes
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 items-center flex-1 justify-center">
                    {navLinks}
                </ul>

                {/* Right Side: Auth + Theme */}
                <div className="hidden md:flex items-center gap-4 flex-1 justify-end text-gray-700 dark:text-gray-200">
                    {user ? (
                        <>
                            <NavLink to="/profile" className="hover:text-indigo-500" onClick={() => setIsOpen(false)}>Profile</NavLink>
                            <button onClick={handleLogout} className="hover:text-red-500">Logout</button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            className="px-4 py-1.5 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-3">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
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

            {/* Mobile Fullscreen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex flex-col items-center justify-center text-gray-100 text-xl space-y-8">
                    <button
                        onClick={toggleMenu}
                        className="absolute top-5 right-5 text-white text-3xl"
                        aria-label="Close Menu"
                    >
                        &times;
                    </button>

                    <ul className="flex flex-col items-center space-y-8 text-center">
                        {navLinks}
                        {user ? (
                            <>
                                <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
                                <li><button onClick={handleLogout} className="hover:text-red-400">Logout</button></li>
                            </>
                        ) : (
                            <li><Link to="/login" onClick={toggleMenu}>Login / Register</Link></li>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
