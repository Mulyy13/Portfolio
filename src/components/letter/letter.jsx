import { GiLetterBomb } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../features/handleSection";
const Letter = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.handleSection.value);
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <Link to={"/message"}>
      <GiLetterBomb
        className={
          display && isHome
            ? "message message-active"
            : "message message-opened"
        }
        onClick={() => {
          console.log(display);
          dispatch(close());
        }}
      />
    </Link>
  );
};

export default Letter;
