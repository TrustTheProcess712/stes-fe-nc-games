import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home Page</Link>
        <Link to="/reviews">Review List</Link>
      </nav>
    </div>
  );
};

export default NavBar;
