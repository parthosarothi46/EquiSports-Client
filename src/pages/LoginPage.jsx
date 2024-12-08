import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login with Google successful!");
      navigate("/");
    } catch (error) {
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 py-0 md:py-5 dark:bg-gray-900">
      <Helmet>
        <title>EquiSports | Login</title>
      </Helmet>
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        {/* Left Section */}
        <div className="max-md:order-1 p-3 md:p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center md:p-8 p-3 bg-white dark:bg-gray-800 md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleLogin}>
            <div className="mb-12">
              <h3 className="text-gray-800 dark:text-white text-4xl font-extrabold">
                Sign in
              </h3>
              <p className="text-gray-800 dark:text-gray-200 text-sm mt-4">
                Don't have an account?{" "}
                <Link to="/register">
                  <a className="text-black dark:text-gray-100 font-semibold hover:underline ml-1 whitespace-nowrap">
                    Register here
                  </a>
                </Link>
              </p>
            </div>

            {/* Email Field */}
            <div>
              <label className="text-gray-800 dark:text-gray-100 text-xs block mb-2">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 dark:bg-gray-700 dark:text-gray-100 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mt-8">
              <label className="text-gray-800 dark:text-gray-100 text-xs block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 dark:bg-gray-700 dark:text-gray-100 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-black focus:ring-black border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="text-gray-800 dark:text-gray-100 ml-3 block text-sm"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="/forgot-password"
                  className="text-black dark:text-gray-100 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 dark:bg-[#222] hover:bg-[#222] focus:outline-none"
                disabled={loading}
              >
                {loading ? "Logging in" : "Sign in"}
              </button>
            </div>

            {/* OR Section */}
            <div className="my-6 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 dark:text-gray-100 text-center">
                or
              </p>
              <hr className="w-full border-gray-300" />
            </div>

            {/* Google Sign-in Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm font-semibold tracking-wider text-gray-800 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
