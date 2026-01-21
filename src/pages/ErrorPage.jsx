import { useRouteError, Link } from "react-router-dom";
import "./Error.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <div className="glow-circle"></div>

      <div className="error-card">
        <h1 className="error-code">
          {error?.status || "404"}
        </h1>

        <h2 className="error-title">
          Oops! Something went wrong
        </h2>

        <p className="error-message">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for does not exist."}
        </p>

        <Link to="/" className="home-btn">
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;