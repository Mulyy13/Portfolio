import "../skills/skills.scss";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import eslint from "../../images/eslint.svg";
import git from "../../images/git.svg";
import js from "../../images/js.svg";
import sass from "../../images/sass.svg";
import vsc from "../../images/vsc.svg";
import rwd from "../../images/rwd.svg";
const Skills = () => {
  return (
    <section>
      <div className="skills__container">
        <h4 className="skills__title">Moje umiejętności</h4>
        <div className="skills__items">
          <div className="skills__item skills__item-html">
            <div className="skills__item-image">
              <img src={html} alt="html" />
            </div>
            <p className="skills__item-name">HTML5</p>
          </div>
          <div className="skills__item skills__item-css">
            <div className="skills__item-image">
              <img src={css} alt="html" />
            </div>
            <p className="skills__item-name">CSS</p>
          </div>
          <div className="skills__item skills__item-js">
            <div className="skills__item-image">
              <img src={js} alt="html" />
            </div>
            <p className="skills__item-name">JavaScript</p>
          </div>
          <div className="skills__item skills__item-react ">
            <div className="skills__item-image">
              <img src={react} alt="html" />
            </div>
            <p className="skills__item-name">React</p>
          </div>
          <div className="skills__item skills__item-redux">
            <div className="skills__item-image">
              <img src={redux} alt="html" />
            </div>
            <p className="skills__item-name ">Redux</p>
          </div>
          <div className="skills__item skills__item-eslint">
            <div className="skills__item-image">
              <img src={eslint} alt="html" />
            </div>
            <p className="skills__item-name">Eslint</p>
          </div>
          <div className="skills__item skills__item-git ">
            <div className="skills__item-image">
              <img src={git} alt="html" />
            </div>
            <p className="skills__item-name">Git</p>
          </div>{" "}
          <div className="skills__item skills__item-sass ">
            <div className="skills__item-image">
              <img src={sass} alt="html" />
            </div>
            <p className="skills__item-name">Sass</p>
          </div>{" "}
          <div className="skills__item skills__item-vsc ">
            <div className="skills__item-image">
              <img src={vsc} alt="html" />
            </div>
            <p className="skills__item-name">VSC</p>
          </div>{" "}
          <div className="skills__item skills__item-rwd">
            <div className="skills__item-image">
              <img src={rwd} alt="html" />
            </div>
            <div className="skills__item-name ">RWD</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
