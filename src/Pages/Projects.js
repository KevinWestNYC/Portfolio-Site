import React from "react";
import ProjectCarousel from "../Components/ProjectCarousel";
import { Container } from '@material-ui/core'

export default function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <section className="project-carousel">
        <ProjectCarousel />
      </section>
    </Container>
  );
}
