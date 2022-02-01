import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./Components/Box";
import SciFiFlight from "./Components/SciFiFlight";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <div id="root">
      <main id="home">
        <NavBar />
        <section className="home">
          <Landing />
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="projects" id="projects">
          <Projects />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
        <section id="footer">
          need footer w social (linkedin, git, insta?)
        </section>
      </main>
    </div>
  );
}