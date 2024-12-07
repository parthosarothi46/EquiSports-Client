// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaGoogle } from "react-icons/fa";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { login, signInWithGoogle } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await login(email, password);
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (error) {
//       toast.error("Invalid credentials. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("Login with Google successful!");
//       navigate("/");
//     } catch (error) {
//       toast.error("Google sign-in failed. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <div className="text-center my-4 text-gray-600">OR</div>
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-red-600"
//         >
//           <FaGoogle className="mr-2" /> Continue with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="bg-gray-900 m-5">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        {/* Left Section */}
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleLogin}>
            <div className="mb-12">
              <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
              <p className="text-gray-800 text-sm mt-4">
                Don't have an account?{" "}
                <Link to="/register">
                  <a className="text-black font-semibold hover:underline ml-1 whitespace-nowrap">
                    Register here
                  </a>
                </Link>
              </p>
            </div>

            {/* Email Field */}
            <div>
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mt-8">
              <label className="text-gray-800 text-xs block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
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
                  className="text-gray-800 ml-3 block text-sm"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="/forgot-password"
                  className="text-black font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Sign in"}
              </button>
            </div>

            {/* OR Section */}
            <div className="my-6 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <p className="text-sm text-gray-800 text-center">or</p>
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
                width="20px"
                className="inline"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                {/* SVG paths omitted for brevity */}
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
