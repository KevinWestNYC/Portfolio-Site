import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Container, Grid, Hidden } from "@material-ui/core";
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import ThreeText from '../Components/ThreeText'

function LandingText() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.sin(clock.getElapsedTime()) * 0.1)
  );
  return (
    <group ref={ref}>
      <ThreeText hAlign="right" position={[-20, 9.5, 0]} children="HI" />
      <ThreeText hAlign="right" position={[-20, 3, 0]} children="IM" />
      <ThreeText hAlign="right" position={[-20, -3.5, 0]} children="KEVIN" />
    </group>
  );
}

function LandingTextSmall() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z =
          Math.sin(clock.getElapsedTime()) * 0.1)
  );
  return (
    <group ref={ref}>
      <ThreeText hAlign="right" position={[-12, 9.5, 0]} children="HI" />
      <ThreeText hAlign="right" position={[-12, 3, 0]} children="IM" />
      <ThreeText hAlign="right" position={[-12, -3.5, 0]} children="KEVIN" />
    </group>
  );
}


export default function Landing() {
  
  return (
    <Container className="page-content">
      <Grid container className="landing-container">
        <Grid item direction="row" xs={12}>
          <Hidden smUp>
            <Canvas
              id="landing-canvas"
              style={{
                height: "90vh",
                width: "90vw",
              }}
              camera={{ position: [20 , 0, 40] }}
            >
              <ambientLight intensity={2} />
              <pointLight position={[40, 40, 40]} />
              <Suspense fallback={null}>
                <LandingTextSmall />
              </Suspense>
            </Canvas>
          </Hidden>
          <Hidden xsDown>
            <Canvas
              id="landing-canvas"
              style={{
                height: "100vh",
                width: "100vw",
              }}
              camera={{ position: [0, 0, 25] }}
            >
              <ambientLight intensity={2} />
              <pointLight position={[40, 40, 40]} />
              <Suspense fallback={null}>
                <LandingText />
              </Suspense>
            </Canvas>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}


{/* <Grid item direction="row" xs={12}>
          <h1>2001 space odyssey flight 3d</h1>
          <p>"Any sufficiently advanced technology is equivalent to magic."</p>]
          <p>
            "Deep in the human unconscious is a pervasive need for a logical
            universe that makes sense. But the real universe is always one step
            beyond logic."
          </p>
          <p>
            16. "The mystery of life isn't a problem to solve, but a reality to
            experience." - Frank Herbert, 'Dune'.
          </p>
        </Grid> */}
// {/* <Canvas
//           colorManagement
//             style={{
//               height: "90vh",
//               width: "90vw",
//             }}
//             camera={{ position: [0, 0, 15] }}
//           >
//             <ambientLight intensity={.7}/>
//             <directionalLight
//           castShadow
//           position={[0, 10, 0]}
//           intensity={15}
//         />
//             <pointLight position={[10, 10, 10]} />
//             {/* <pointLight position={[-10, -10, -10]} /> */}
//             <ThreeName position={[0, 0, 0]} />
//             {/* <Box position={[0, 0, 0]} /> */}
//             {/* <Wormhole position={[0, 0, 0]}/> */}
//           </Canvas> */}