import React from "react";
import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import KevinProfilePicture from "../Images/KevinProfilePicture.jpg";
import scale from "../Images/scale.png"

export default function About() {
  return (
    <Container className="page-content">
      <h1 className="page-title" >About</h1>
      <Grid container>
        <Grid container direction="row">
          <Grid item id="about-text" direction="column" xs={12} sm={6}>
            <p className="montserrat">
              Hi, I'm Kevin! I'm a self-taught programmer from Brooklyn, NY.
              A little over one year ago I decided to change careers from an athletic
              trainer for kids to a full-stack developer and it has been an exciting
              journey. In that time I have absorbed new languages, new ways of
              thinking, and created a number of fun and challenging projects. I
              am currently working at Nifty Art Collective, a Web3 startup,
              building front-end React components as well as components that
              link to the blockchain. I'm excited to continue my growth and
              build interesting projects with cool people!
            </p>
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
              <Typography id="language-title">I have experience with:</Typography>
              <img
                id="scale"
                className="ten"
                src={scale}
                title="Experience Scale"
              />
              <img
                id="html-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                title="HTML"
              />
              <img
                id="css-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                title="CSS"
              />
                <img
                  id="materialui-icon"
                  className="icon-image eight"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                  title="MaterialUI"
                />
              <img
                id="js-icon"
                className="icon-image seven"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                title="Javascript"
              />
              <img
                id="react-icon"
                className="icon-image seven"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React"
              />
                <img
                  id="github-icon"
                  className="icon-image six"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  title="Github"
                />
              <img
                id="bootstrap-icon"
                className="icon-image five"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                title="Bootstrap"
              />
              <img
                id="node-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                title="Nodejs"
              />
              <img
                id="express-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                title="Express"
              />
              <img
                id="ruby-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
                title="Ruby"
              />
              <img
                id="heroku-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
                title="Heroku"
              />
              <img
                id="figma-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                title="Figma"
              />
              <img
                id="threejs-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                title="ThreeJS"
              />
            </Grid>
          </Grid>
          <Grid lg={2}></Grid>
          <Hidden xsDown>
            <Grid
              item
              className="profile-photo-div"
              direction="column"
              xs={12}
              sm={4}
            >
              <img className="profile-image" src={KevinProfilePicture}></img>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}
