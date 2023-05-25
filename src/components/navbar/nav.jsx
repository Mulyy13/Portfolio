import { about, projects, skills, contact } from "../../features/handleSection";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <ul>
        <li onClick={() => dispatch(about())}>About</li>
        <li onClick={() => dispatch(projects())}>Projects</li>
        <li onClick={() => dispatch(skills())}>Skills</li>
        <li onClick={() => dispatch(contact())}>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
