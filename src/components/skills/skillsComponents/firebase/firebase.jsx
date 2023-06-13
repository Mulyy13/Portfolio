import firebase from "../../../../assets/svgs/firebase.svg";

const Firebase = () => {
  return (
    <div className="skills__item skills__item-firebase ">
      <div className="skills__item-image">
        <img src={firebase} alt="firebase" />
      </div>
      <p className="skills__item-name">Firebase</p>
    </div>
  );
};

export default Firebase;
