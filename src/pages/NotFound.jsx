import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 dark:text-red-400">
          404
        </h1>
        <h2 className="text-2xl mt-4 text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-4 text-blue-500 hover:underline dark:text-blue-400"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
