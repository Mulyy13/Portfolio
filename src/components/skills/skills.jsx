import "../skills/skills.scss";
import Html from "./html/html";
import Css from "./css/css";
import Js from "./js/js";
import React from "./react/react";
import Redux from "./redux/redux";
import Eslint from "./eslint/eslint";
import Git from "./git/git";
import Sass from "./sass/sass";
import Rwd from "./rwd/rwd";
import Vsc from "./vsc/vsc";

const Skills = ({ showParagraph }) => {
  return (
    <section>
      <div className="skills__container">
        <h4 className="skills__title">Moje umiejętności</h4>
        <div className="skills__items">
          <Html />
          <Css />
          <Js />
          <React />
          <Redux />
          <Eslint />
          <Git />
          <Sass />
          <Vsc />
          <Rwd />
        </div>
      </div>
    </section>
  );
};

export default Skills;
