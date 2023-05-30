import "./projects.scss";
import "../skills/skills.scss";
import { myProjects } from "./data/data";
import { useState } from "react";
import {
  TbArrowBigRightLinesFilled,
  TbArrowBigLeftLinesFilled,
} from "react-icons/tb";
import { BsFillPlayCircleFill, BsGithub } from "react-icons/bs";

const Projects = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  console.log(myProjects.length);

  return (
    <section>
      <div className="projects">
        {myProjects.map((item, index) => {
          if (sliderIndex === index) {
            return (
              <div className="projects__container" key={item.id}>
                <div
                  className="projects__image"
                  style={{ backgroundImage: `url(${item.imageURL})` }}
                ></div>

                <div className="projects__details-wrapper">
                  {" "}
                  <TbArrowBigLeftLinesFilled
                    className="projects__arrow"
                    onClick={() => {
                      if (sliderIndex > 0) {
                        setSliderIndex(sliderIndex - 1);
                      } else {
                        setSliderIndex(myProjects.length - 1);
                      }
                    }}
                  />
                  <div className="projects__details">
                    <h4 className="projects__details-title">
                      <a href={item.urlGit}>
                        {" "}
                        <BsGithub className="git" />
                      </a>
                      {item.name}
                      <a href={item.urlApp}>
                        <BsFillPlayCircleFill className="play" />
                      </a>
                    </h4>
                    <p className="projects__details-desc">{item.description}</p>
                    <ul className="projects__details-tech">{item.tech}</ul>
                  </div>
                  <TbArrowBigRightLinesFilled
                    className="projects__arrow"
                    onClick={() => {
                      if (sliderIndex < myProjects.length - 1) {
                        setSliderIndex(sliderIndex + 1);
                      } else {
                        setSliderIndex(0);
                      }
                    }}
                  />
                </div>
              </div>
            );
          } else return null;
        })}
      </div>
    </section>
  );
};

export default Projects;
