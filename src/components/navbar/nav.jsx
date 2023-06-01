import "./nav.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link to={"/About"} className="navbar__list-item">
          O mnie
        </Link>
        <Link to={"/Skills"} className="navbar__list-item">
          Umiejętności
        </Link>
        <Link to={"/Projects"} className="navbar__list-item">
          Projekty
        </Link>
        <Link to={"/Contact"} className="navbar__list-item">
          Kontakt
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
