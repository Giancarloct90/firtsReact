import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="headNavBar">
        <nav className="navBar">
          <h1 className="logoNavBar"> BLOGGERS</h1>
          <ul className="ulNavLinks">
            <Link to="/">HOME</Link>
            <Link to="/create">NEW BLOG</Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
