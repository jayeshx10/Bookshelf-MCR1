import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div id="header">
      <h1>Bookshelf App</h1>
      <div>
        <button className="link-btn">
          <Link to="/" className="link-btn">
            HOME
          </Link>
        </button>
        <button className="link-btn">
          <Link to="/search" className="link-btn">
            SEARCH
          </Link>
        </button>
      </div>
    </div>
  );
};
