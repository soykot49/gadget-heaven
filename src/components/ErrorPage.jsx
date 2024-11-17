import errorImg from "../assets/error.png"

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-1/2 md:w-1/3 mb-6"
      />
      <h1 className="text-8xl md:text-9xl font-bold text-purple-600">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Oops! Page not found
      </p>
      <p className="text-gray-500 mt-2 mb-6">
        The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-200"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
