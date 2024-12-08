import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check localStorage for theme preference on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Save theme preference
  };

  return (
    <header className=" bg-white dark:bg-gray-800 px-3 lg:px-4 xl:px-0">
      <div className="container mx-auto flex py-4 tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          {/* Logo */}
          <Link to="/">
            <p className="text-3xl font-bold text-black dark:text-white">
              EquiSports
            </p>
          </Link>

          {/* Collapsible Menu */}
          <div
            id="collapseMenu"
            className={`${
              menuOpen ? "block" : "hidden lg:block"
            } max-lg:fixed max-lg:bg-white dark:max-lg:bg-gray-800 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            {/* Close Button */}
            {menuOpen && (
              <button
                id="toggleClose"
                onClick={toggleMenu}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white dark:bg-gray-800 w-9 h-9 flex items-center justify-center border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-black dark:fill-white"
                  viewBox="0 0 320.591 320.591"
                >
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
                </svg>
              </button>
            )}

            {/* Navigation Links */}
            <ul className="lg:flex gap-x-5 max-lg:space-y-3">
              <li className="mb-6 hidden max-lg:block">
                <Link to="/">
                  <p className="text-2xl font-bold text-black dark:text-white">
                    EquiSports
                  </p>
                </Link>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-black dark:hover:text-white block font-semibold text-[15px] ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/equipment"
                  className={({ isActive }) =>
                    `hover:text-black dark:hover:text-white block font-semibold text-[15px] ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`
                  }
                >
                  All Sports Equipment
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      to="/add-equipment"
                      className={({ isActive }) =>
                        `hover:text-black dark:hover:text-white block font-semibold text-[15px] ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-gray-500 dark:text-gray-400"
                        }`
                      }
                    >
                      Add Equipment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my-equipment"
                      className={({ isActive }) =>
                        `hover:text-black dark:hover:text-white block font-semibold text-[15px] ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-gray-500 dark:text-gray-400"
                        }`
                      }
                    >
                      My Equipment List
                    </NavLink>
                  </li>
                </>
              )}
              {/* Theme Toggle for Mobile */}
              <li className="block lg:hidden">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center rounded-full border border-gray-500 p-2 text-black dark:text-white"
                >
                  {theme === "light" ? (
                    <MdOutlineDarkMode />
                  ) : (
                    <MdOutlineLightMode />
                  )}
                </button>
              </li>
            </ul>
          </div>

          {/* User Authentication and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm rounded font-semibold text-gray-500 border-2 bg-transparent hover:bg-gray-50 dark:text-white dark:border-white dark:hover:bg-gray-700 transition-all ease-in-out duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm rounded font-semibold text-white border-2 border-black bg-black transition-all ease-in-out duration-300 hover:bg-transparent hover:text-black hover:bg-white"
                >
                  Sign up
                </Link>
                {/* Theme Toggle for Desktop */}
                <button
                  onClick={toggleTheme}
                  className="hidden lg:block p-2 rounded-full border border-gray-500 text-black dark:text-white"
                >
                  {theme === "light" ? (
                    <MdOutlineDarkMode />
                  ) : (
                    <MdOutlineLightMode />
                  )}
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <div className="relative group">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/150"}
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full border-2 border-white cursor-pointer"
                    />
                    <div className="absolute hidden group-hover:block bg-gray-700 text-sm rounded shadow-lg p-2 w-auto top-full mt-1">
                      <p className="text-white">{user.displayName || "User"}</p>
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-sm font-semibold rounded text-white bg-black hover:bg-black"
                  >
                    Log Out
                  </button>
                  {/* Theme Toggle for Desktop */}
                  <button
                    onClick={toggleTheme}
                    className="hidden lg:block p-2 rounded-full border border-gray-500 text-black dark:text-white"
                  >
                    {theme === "light" ? (
                      <MdOutlineDarkMode />
                    ) : (
                      <MdOutlineLightMode />
                    )}
                  </button>
                </div>
              </>
            )}
            {/* Hamburger Menu Icon */}
            {!menuOpen ? (
              <button
                id="toggleOpen"
                onClick={toggleMenu}
                className="lg:hidden w-7 h-7"
              >
                <svg
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
