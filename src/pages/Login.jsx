import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const { login, handleSocialLogin } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate("/");
      })
      .catch(() => {
        setError("Invalid credentials");
        toast.error("Invalid email or password");
      });
  };

  const handleThirdPartyLogin = (provider, providerName) => {
    handleSocialLogin(provider)
      .then(() => {
        toast.success(`Logged in with ${providerName}`);
        navigate("/");
      })
      .catch(() => toast.error(`${providerName} login failed`));
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then(() => {
        toast.success("Logged in with GitHub");
        navigate("/");
      })
      .catch(() => toast.error("GitHub login failed"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Login</h2>
        <input name="email" type="email" placeholder="Email" required className="input input-bordered w-full mb-4" />
        <input name="password" type="password" placeholder="Password" required className="input input-bordered w-full mb-4" />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="btn btn-primary w-full mb-3">Login</button>

        <button type="button" onClick={() => handleThirdPartyLogin(googleProvider, "Google")} className="btn w-full mb-2">Login with Google</button>
        <button type="button" onClick={() => handleThirdPartyLogin(githubProvider, "GitHub")} className="btn w-full mb-2">Login with GitHub</button>

        <p className="text-sm mt-4 dark:text-gray-300">
          Don't have an account? <Link to="/register" className="text-indigo-600">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
