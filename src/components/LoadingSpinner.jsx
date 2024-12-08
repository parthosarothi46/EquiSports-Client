const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800">
      <div className="loader border-t-4 border-black dark:border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
