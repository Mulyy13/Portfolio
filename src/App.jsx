import { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/nav";
import { GiLetterBomb } from "react-icons/gi";
import Message from "./components/message/message";
import { useSelector } from "react-redux";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
function App() {
  const [isMessageOpened, setIsMessageOpened] = useState(false);
  const display = useSelector((state) => state.handleSection.value);
  console.log(display);
  return (
    <>
      <Navbar />
      <div className="App">
        {isMessageOpened && display === "" ? <Message /> : null}
        {display === "" ? (
          <GiLetterBomb
            className={
              isMessageOpened
                ? "message message-opened"
                : "message message-active"
            }
            onClick={() => {
              setIsMessageOpened(true);
            }}
          />
        ) : null}
        {display === "about" ? <About /> : null}
        {display === "projects" ? <Projects /> : null}
        {display === "skills" ? <Skills /> : null}
        {display === "contact" ? <Contact /> : null}
      </div>
    </>
  );
}

export default App;
