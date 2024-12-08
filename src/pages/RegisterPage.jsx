import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
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
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-0 md:py-5">
      <Helmet>
        <title>EquiSports | Register</title>
      </Helmet>
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-3 md:p-4 bg-gray-50 dark:bg-gray-800 h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>
        <div className="flex items-center p-3 md:p-6 h-full w-full">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleRegister}>
            <div className="mb-12">
              <h3 className="text-black dark:text-white md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>
            <div>
              <label className="text-gray-800 dark:text-gray-200 text-xs block mb-2">
                Full Name
              </label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-black dark:border-gray-600 focus:ring-0 px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-gray-800 dark:text-gray-200 text-xs block mb-2">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-black dark:border-gray-600 focus:ring-0 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-gray-800 dark:text-gray-200 text-xs block mb-2">
                Photo URL
              </label>
              <div className="relative flex items-center">
                <input
                  name="photoURL"
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-black dark:border-gray-600 focus:ring-0 px-2 py-3 outline-none"
                  placeholder="Enter photo URL (optional)"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="text-gray-800 dark:text-gray-200 text-xs block mb-2">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-black dark:border-gray-600 focus:ring-0 px-2 py-3 outline-none"
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
                className="ml-3 block text-sm text-gray-800 dark:text-gray-200"
              >
                I accept the{" "}
                <a
                  href="/terms"
                  className="text-black dark:text-white font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-black hover:bg-black text-white focus:outline-none"
                disabled={loading}
              >
                {loading ? "Registering..." : "Create an account"}
              </button>
              <p className="text-sm mt-6 text-gray-800 dark:text-gray-200">
                Already have an account?{" "}
                <Link to="/login">
                  <a className="text-black dark:text-white font-semibold hover:underline ml-1">
                    Login here
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
