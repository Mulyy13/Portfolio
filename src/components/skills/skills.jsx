import "../skills/skills.scss";
import Html from "./skillsComponents/html/html";
import Css from "./skillsComponents/css/css";
import Js from "./skillsComponents/js/js";
import React from "./skillsComponents/react/react";
import Redux from "./skillsComponents/redux/redux";
import Eslint from "./skillsComponents/eslint/eslint";
import Git from "./skillsComponents/git/git";
import Sass from "./skillsComponents/sass/sass";
import Rwd from "./skillsComponents/rwd/rwd";
import Vsc from "./skillsComponents/vsc/vsc";
// import { projects } from "../../features/handleSection";

const Skills = () => {
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
        <p className="skills__projects-navigator">
          Sprawdź <span>projekty</span> w których je wykorzystywałem
        </p>
      </div>
    </section>
  );
};

export default Skills;
