import React from "react";
import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import KevinProfilePicture from "../Images/KevinProfilePicture.jpg";

export default function About() {
  return (
    <Container className="page-content">
      <Typography variant="h2">About</Typography>
      <Grid container>
        <Grid container direction="row">
          <Grid item id="about-text" direction="column" xs={12} lg={5}>
            <Typography>
              My name is Kevin and I am a self-taught programmer from Brooklyn,
              NY. Around one year ago I decided to change careers from an
              athletic trainer to a developer and it has been an exciting
              journey. In that time I have absorbed new languages and ways of
              thinking and created a number of fun and challenging projects. I
              am currently working for a web3 startup building front-end
              components as well as components that link to the blockchain. I am
              excited to continue my growth and build interesting projects.
            </Typography>
            <Hidden smUp>
              <Grid
                item
                className="profile-photo-div"
                direction="column"
                xs={12}
                lg={4}
              >
                <img className="profile-image" src={KevinProfilePicture}></img>
              </Grid>
            </Hidden>
            <Grid id="language-container" direction="row">
              <Typography>Languages I have experience with:</Typography>
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                title="HTML"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                title="CSS"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                title="Javascript"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                title="Bootstrap"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                title="Nodejs"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                title="Express"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
                title="Ruby"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                title="MaterialUI"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                title="Github"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
                title="Heroku"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                title="Figma"
              />
              <img
                className="icon-image"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                title="ThreeJS"
              />
            </Grid>
          </Grid>
          <Grid lg={3}></Grid>
          <Hidden smDown>
            <Grid
              item
              className="profile-photo-div"
              direction="column"
              xs={12}
              lg={4}
            >
              <img className="profile-image" src={KevinProfilePicture}></img>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}
