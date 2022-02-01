import React from "react";
import Wormhole from '../Components/Wormhole'
import { Canvas, useFrame } from 'react-three-fiber';


export default function Landing() {
  
  const canvasStyle = {
    width: "100vw",
    height: "100vh"
  };
  return (
    <div>
      {/* <h1>2001 space odyssey flight 3d</h1>
    <p>"Any sufficiently advanced technology is equivalent to magic."</p>]
    <p>"Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic."</p>
    <p>16. "The mystery of life isn't a problem to solve, but a reality to experience."

- Frank Herbert, 'Dune'.</p> */}
      <div id="wormhole"></div>
      {/* <Wormhole/> */}
      
    </div>
  );
}
