import "./projects.scss";
import { myProjects } from "./data/data";
import { useState } from "react";
const Projects = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <section>
      <div className="projects">
        {myProjects.map((item, index) => {
          if (sliderIndex === index) {
            return (
              <div className="projects__container" key={item.id}>
                {item.name}
              </div>
            );
          } else return null;
        })}
        <div className="projects__pagination">
          <ul>
            {myProjects.map((item, index) => {
              return <li className="dot">o</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
