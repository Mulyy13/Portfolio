import vsc from "../../../images/vsc.svg";
const Vsc = () => {
  let showParagraph = true;
  return (
    <div className="skills__item skills__item-vsc ">
      <div className="skills__item-image">
        <img src={vsc} alt="vsc" />
      </div>
      {showParagraph && <p className="skills__item-name">Vsc</p>}
    </div>
  );
};

export default Vsc;
