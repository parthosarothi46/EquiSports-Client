// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext"; // Auth context for Firebase actions
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegisterPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { register, updateProfile } = useAuth(); // Auth methods
//   const navigate = useNavigate();

//   const validatePassword = (password) => {
//     return /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validatePassword(password)) {
//       toast.error(
//         "Password must contain at least 6 characters, including uppercase and lowercase letters."
//       );
//       return;
//     }
//     setLoading(true);
//     try {
//       const userCredential = await register(email, password);
//       await updateProfile(userCredential.user, { displayName: name, photoURL });
//       toast.success("Registration successful!");
//       navigate("/"); // Redirect after successful registration
//     } catch (error) {
//       toast.error("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
//         <form onSubmit={handleRegister}>
//           {/* Name Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           {/* Email Field */}
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

//           {/* Photo URL Field */}
//           <div className="mb-4">
//             <label className="block text-gray-700">Photo URL</label>
//             <input
//               type="url"
//               value={photoURL}
//               onChange={(e) => setPhotoURL(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               placeholder="Enter your photo URL (optional)"
//             />
//           </div>

//           {/* Password Field */}
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

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
//             disabled={loading}
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-500 hover:underline">
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Auth context for Firebase actions
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth(); // Auth methods
  const navigate = useNavigate();

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      toast.error(
        "Password must contain at least 6 characters, including uppercase and lowercase letters."
      );
      return;
    }

    setLoading(true);

    try {
      const userCredential = await register(email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Registration Error: ", error);
      toast.error(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 bg-gray-50 h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>
        <div className="flex items-center p-6 h-full w-full">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleRegister}>
            <div className="mb-12">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>
            <div>
              <label className="text-gray-800 text-xs block mb-2">
                Full Name
              </label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">
                Photo URL
              </label>
              <div className="relative flex items-center">
                <input
                  name="photoURL"
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter photo URL (optional)"
                />
              </div>
            </div>
            <div className="mt-6">
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
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="flex items-center mt-6">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 shrink-0 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-3 block text-sm text-gray-800"
              >
                I accept the{" "}
                <a
                  href="/terms"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
                disabled={loading}
              >
                {loading ? "Registering..." : "Create an account"}
              </button>
              <p className="text-sm mt-6 text-gray-800">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Login here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
