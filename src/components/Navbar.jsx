import { Link, NavLink } from "react-router-dom"; // Correct import for React Router DOM
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Website Name/Logo */}
        <Link to="/" className="text-xl font-bold">
          SportsStore
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${
                isActive ? "text-yellow-300 font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/equipment"
            className={({ isActive }) =>
              `hover:text-yellow-300 ${
                isActive ? "text-yellow-300 font-bold" : ""
              }`
            }
          >
            All Sports Equipment
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-equipment"
                className={({ isActive }) =>
                  `hover:text-yellow-300 ${
                    isActive ? "text-yellow-300 font-bold" : ""
                  }`
                }
              >
                Add Equipment
              </NavLink>
              <NavLink
                to="/my-equipment"
                className={({ isActive }) =>
                  `hover:text-yellow-300 ${
                    isActive ? "text-yellow-300 font-bold" : ""
                  }`
                }
              >
                My Equipment List
              </NavLink>
            </>
          )}
        </div>

        {/* User Authentication Section */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              {/* User Avatar */}
              <div className="relative group">
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"} // Fallback in case photoURL is null
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full border-2 border-white cursor-pointer"
                />
                {/* Display Name Tooltip */}
                <div className="absolute hidden group-hover:block bg-gray-700 text-sm rounded shadow-lg p-2 w-auto top-full mt-1">
                  <p className="text-yellow-300">
                    {user.displayName || "User"}
                  </p>
                </div>
              </div>
              {/* Log Out Button */}
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
