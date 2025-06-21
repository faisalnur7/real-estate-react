import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const { login, handleSocialLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const inputClass = "input input-bordered w-full mb-4";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Error logging in:", errorCode, errorMessage);
      });
  };

  const handleThirdPartyLogin = (provider, providerName) => {
    handleSocialLogin(provider)
      .then(() => {
        toast.success(`Logged in with ${providerName}`);
        navigate(location?.state ? location.state : '/');
      })
      .catch(() => {
        toast.error(`${providerName} login failed`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Login</h2>
        <input name="email" type="email" placeholder="Email" required className={inputClass} />
        <input name="password" type="password" placeholder="Password" required className={inputClass} />

        <button className="btn btn-primary w-full mb-3">Login</button>
        <button type="button" onClick={() => handleThirdPartyLogin(googleProvider, "Google")} className="btn w-full mb-2" > Login with Google </button>
        <button type="button" onClick={() => handleThirdPartyLogin(githubProvider, "GitHub")} className="btn w-full mb-2" > Login with GitHub</button>
        <p className="text-sm mt-4 dark:text-gray-300 text-center">Do not have an account?{" "}
          <Link to="/register" className="text-indigo-600">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
