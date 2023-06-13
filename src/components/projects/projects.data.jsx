import Html from "../skills/skillsComponents/html/html";
import Css from "../skills/skillsComponents/css/css";
import Js from "../skills/skillsComponents/js/js";
import React from "../skills/skillsComponents/react/react";
import Redux from "../skills/skillsComponents/redux/redux";
import Eslint from "../skills/skillsComponents/eslint/eslint";
import Sass from "../skills/skillsComponents/sass/sass";
import Rwd from "../skills/skillsComponents/rwd/rwd";

export const myProjects = [
  {
    id: 0,
    urlApp: "https://league-of-info-bcf2d.web.app/",
    urlGit: "https://github.com/Mulyy13/league",
    name: "League of info",
    imageURL: process.env.PUBLIC_URL + "/images/League1.png",
    description:
      "Encyklopedia postaci z gry League of Legends zawierająca statystyki, podgląd umiejętności, skórek do postaci oraz porady",
    tech: (
      <>
        <Html showParagraph={false} /> <Css /> <Js /> <Sass /> <React />{" "}
        <Redux /> <Eslint /> <Rwd />
      </>
    ),
  },
  {
    id: 1,
    urlApp: "https://mulyy13.github.io/Memories/",
    urlGit: "https://github.com/Mulyy13/Memories",
    name: "Memories",
    imageURL: process.env.PUBLIC_URL + "/images/Memories1.png",
    description:
      "Popularna gra memories, polegająca na odkrywaniu i łączeniu w pary takich samych kolorow ",
    tech: (
      <>
        <Html /> <Css /> <Js />
      </>
    ),
    showParagraph: false,
  },
  {
    id: 2,
    urlApp: "https://mulyy13.github.io/piano/",
    urlGit: "https://github.com/Mulyy13/piano",
    name: "Piano",
    imageURL: process.env.PUBLIC_URL + "/images/Piano.png",
    description: "Mini piano do gry na klawiaturze",
    tech: (
      <>
        <Html /> <Css /> <Js />
      </>
    ),
    showParagraph: false,
  },
];
