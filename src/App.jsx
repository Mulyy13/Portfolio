import React, { useState } from "react";
import "./App.scss";
import { GiLetterBomb } from "react-icons/gi";
import Message from "./components/message/message";

import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";

function App() {
  const [isMessageOpened, setIsMessageOpened] = useState(false);

  return (
    <Router>
      <Layout>
        <div className="App">
          {isMessageOpened ? <Message /> : null}

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

          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>{" "}
      </Layout>
    </Router>
  );
}

export default App;
