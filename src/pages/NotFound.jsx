const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500">404</h1>
        <p className="text-lg mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="text-xl text-blue-500 hover:underline">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
