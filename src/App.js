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
    <div>
   <main id='home'>
      <NavBar />
      <section className='home'>
        <h1>home</h1>
        <Landing />
      </section>
      <section className='about' id='about'>
        <h1>about</h1>
        <About/>
      </section>
      <section className='projects' id='projects'>
        <h1>projects</h1>
        <Projects />
      </section>
      <section className='contact' id='contact'>
        <h1>contact</h1>
        <Contact />
      </section>
      {/* <section className='rest'></section>  need footer w social (linkedin, git, insta?) */}
    </main>
    </div>
  );
}

// <Canvas>
//   <ambientLight />
//   <pointLight position={[10, 10, 10]} />
//   <Box position={[-1.2, 0, 0]} />
//   <Box position={[1.2, 0, 0]} />
//   {/* <SciFiFlight position={2,2,2} /> */}
// </Canvas>

 //   <Router>
    //   <Navbar />
    //   <Routes>
    //       <Route exact path='/' exact element={<Landing />} />
    //       <Route path='/about' element={<About/>} />
    //       <Route path='/projects' element={<Projects/>} />
    //       <Route path='/contact' element={<Contact/>} />
    //   </Routes>
    //   </Router>
    // <div>
    //   <Landing />
    //   <About />
    //   <Projects />
    //   <Contact />
    // </div>