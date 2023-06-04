import { useState } from "react";
import "./nav.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const isSkills = location.pathname === "/Skills";
  const isAbout = location.pathname === "/About";
  const isProjects = location.pathname === "/Projects";
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link
          to={"/About"}
          className={`navbar__list-item ${isAbout ? "active" : null}`}
          onClick={() => setActiveLink("about")}
        >
          O mnie
        </Link>
        <Link
          to={"/Skills"}
          className={`navbar__list-item ${isSkills ? "active" : null}`}
          onClick={() => setActiveLink("skills")}
        >
          Umiejętności
        </Link>
        <Link
          to={"/Projects"}
          className={`navbar__list-item ${isProjects ? "active" : null}`}
          onClick={() => setActiveLink("projects")}
        >
          Projekty
        </Link>
        <Link
          to={"/Contact"}
          className={`navbar__list-item ${
            activeLink === "contact" ? "active" : null
          }`}
          onClick={() => setActiveLink("contact")}
        >
          Kontakt
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
