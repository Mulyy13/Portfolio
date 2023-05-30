import { about, projects, skills, contact } from "../../features/handleSection";
import { useDispatch } from "react-redux";
import "./nav.scss";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item" onClick={() => dispatch(about())}>
          About
        </li>
        <li className="navbar__list-item" onClick={() => dispatch(projects())}>
          Projects
        </li>
        <li className="navbar__list-item" onClick={() => dispatch(skills())}>
          Skills
        </li>
        <li className="navbar__list-item" onClick={() => dispatch(contact())}>
          contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
