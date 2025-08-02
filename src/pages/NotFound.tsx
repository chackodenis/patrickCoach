
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" data-id="not-found-container">
      <div className="text-center" data-id="not-found-content">
        <h1 className="text-4xl font-bold mb-4" data-id="not-found-title">404</h1>
        <p className="text-xl text-gray-600 mb-4" data-id="not-found-message">Oops! Page not found</p>
        <a 
          href="/" 
          className="text-blue-500 hover:text-blue-700 underline"
          data-id="not-found-home-link"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
