import rwd from "../../../../assets/svgs/rwd.svg";

import "./rwd.scss";
const Rwd = () => {
  return (
    <div className="skills__item skills__item-rwd ">
      <div className="skills__item-image">
        <img src={rwd} alt="rwd" />
      </div>
      <p className="skills__item-name">RWD</p>
    </div>
  );
};

export default Rwd;
