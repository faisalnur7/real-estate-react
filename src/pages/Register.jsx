import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from "../contexts/AuthContext";

const Register = () => {
    const { createUser } = useContext(UserContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');

        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUpper || !hasLower || !isLongEnough) {
            setError("Password must be at least 6 characters, include uppercase and lowercase letters.");
            toast.error("Weak password");
            return;
        }

        createUser(email, password)
            .then(() => {
                toast.success("Registration successful");
                navigate("/login");
            })
            .catch(err => {
                setError(err.message);
                toast.error("Registration failed");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleRegister} className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Register</h2>

                <input name="name" type="text" placeholder="Full Name" required className="input input-bordered w-full mb-4" />
                <input name="email" type="email" placeholder="Email" required className="input input-bordered w-full mb-4" />
                <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered w-full mb-4" />
                <input name="password" type="password" placeholder="Password" required className="input input-bordered w-full mb-4" />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button className="btn btn-primary w-full mb-4">Register</button>

                <p className="text-sm mt-2 dark:text-gray-300">
                    Already have an account? <Link to="/login" className="text-indigo-600">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
