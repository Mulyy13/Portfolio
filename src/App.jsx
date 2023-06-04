import React from "react";
import "./App.scss";
import Message from "./components/message/message";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Letter from "./components/letter/letter";
import { configureStore } from "@reduxjs/toolkit";
import closeLetter from "../src/features/handleSection";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    handleSection: closeLetter,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Letter />
          <div className="App">
            <Routes>
              <Route path="/message" element={<Message />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/Projects" element={<Projects />}></Route>
              <Route path="/Skills" element={<Skills />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
          </div>{" "}
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
