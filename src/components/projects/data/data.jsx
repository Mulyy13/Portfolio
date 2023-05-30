import Html from "../../skills/html/html";
import Css from "../../skills/css/css";
import Js from "../../skills/js/js";
import React from "../../skills/react/react";
import Redux from "../../skills/redux/redux";
import Eslint from "../../skills/eslint/eslint";
import Git from "../../skills/git/git";
import Sass from "../../skills/sass/sass";
import Vsc from "../../skills/vsc/vsc";
import Rwd from "../../skills/rwd/rwd";
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
    imageURL: process.env.PUBLIC_URL + "/images/Piano1.png",
    description: "Mini piano do gry na klawiaturze",
    tech: (
      <>
        <Html /> <Css /> <Js />
      </>
    ),
    showParagraph: false,
  },
  {
    id: 3,
    urlApp: "https://mulyy13.github.io/Memories/",
    urlGit: "https://github.com/Mulyy13/ToDoApp",
    name: "To Do App",
    imageURL: process.env.PUBLIC_URL + "/images/Memories1.png",
    description: "Lista rzeczy do zrobienia",
    tech: (
      <>
        <Html /> <Sass /> <Js /> <React />
      </>
    ),
    showParagraph: false,
  },
];
