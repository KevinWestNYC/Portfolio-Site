import React from "react";
import { Container, Grid, Hidden, Typography } from "@material-ui/core";
import KevinProfilePicture from "../Images/KevinProfilePicture.jpg";
import scale from "../Images/scale.png"
import handleViewport from 'react-in-viewport';

const MobileProfilePic = (props) => {
  const { inViewport, forwardedRef, enterCount, leaveCount } = props;

  const ProfilePic = () => {
    return(
      <Hidden smUp>
      <Grid
        item
        className="small-profile-photo-div"
        direction="column"
        xs={12}
        lg={4}
      >
        <img id="small-profile-image" className="profile-image" src={KevinProfilePicture} alt="Me!"></img>
      </Grid>
    </Hidden>
    )
  }
  
  if (inViewport && leaveCount === 0 ) {
      return (
          <div ref={forwardedRef}>
                <ProfilePic/>
          </div>
      )
  } 
  return (
      <div className="empty-container"ref={forwardedRef}>
          <div className="container">
           <Hidden smUp>
             <Grid
              item
              className="still-small-profile-photo-div"
              direction="column"
              xs={12}
              lg={4}
            >
              <img
                id="small-profile-image"
                className="profile-image"
                src={KevinProfilePicture}
                alt="Me!"
              ></img>
            </Grid>
          </Hidden>
        </div>
      </div>
  );
};

// const DesktopProfilePic = (props) => {
//   const { inViewport, forwardedRef, enterCount, leaveCount } = props;
//   if (inViewport && leaveCount === 0 ) {
//       return (
//           <div ref={forwardedRef}>
//               <div className="container">
//               <Hidden smUp>
//               <Grid
//                 item
//                 className="profile-photo-div"
//                 direction="column"
//                 xs={12}
//                 lg={4}
//               >
//                 <img id="profile-image" className="profile-image" src={KevinProfilePicture} alt="Me!"></img>
//               </Grid>
//             </Hidden>
//               </div>
//           </div>
//       )
//   }
//   return (
//       <div ref={forwardedRef}>
//           <div className="empty-container">
//               <Hidden smUp>
//               <Grid
//                 item
//                 className="still-profile-photo-div"
//                 direction="column"
//                 xs={12}
//                 lg={4}
//               >
//                 <img id="profile-image" className="profile-image" src={KevinProfilePicture} alt="Me!"></img>
//               </Grid>
//             </Hidden>
//               </div>
//       </div>
//   );
// };

const ViewportBlock = handleViewport(MobileProfilePic, /** options: {}, config: {} **/);
// const ViewportBlock2 = handleViewport(DesktopProfilePic, /** options: {}, config: {} **/);

export default function About() {
  return (
    <Container className="page-content">
      <h1 className="page-title">ABOUT</h1>
      <Grid container>
        <Grid container direction="row">
          <ViewportBlock disconnectOnLeave="true"	/>
          <Grid item id="about-text" direction="column" xs={12} sm={6}>
            <p className="montserrat">
              Hi, I'm Kevin! I'm a self-taught programmer from Brooklyn, NY. A
              little over one year ago I decided to change careers from an
              athletic trainer for kids to a full-stack developer and it has
              been an exciting journey. In that time I have absorbed new
              languages, new ways of thinking, and created a number of fun and
              challenging projects. I am currently working at Nifty Art
              Collective, a Web3 startup, building front-end React components as
              well as components that link to the blockchain. I'm excited to
              continue my growth and build interesting projects with cool
              people!
            </p>
            <Grid id="language-container" direction="row">
              <Typography id="language-title">
                I have experience with:
              </Typography>
              <img
                id="scale"
                className="ten"
                src={scale}
                title="Experience Scale"
                alt="Experience Scale"
              />
              <img
                id="html-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                title="HTML"
                alt="HTML"
              />
              <img
                id="css-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                title="CSS"
                alt="CSS"
              />
              <img
                id="react-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React"
                alt="React"
              />
              <img
                id="js-icon"
                className="icon-image seven"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                title="Javascript"
                alt="Javascript"
              />
              <img
                id="materialui-icon"
                className="icon-image eight"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                title="MaterialUI"
                alt="MaterialUI"
              />
              <img
                id="github-icon"
                className="icon-image six"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                title="Github"
                alt="Github"
              />
              <img
                id="bootstrap-icon"
                className="icon-image five"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                title="Bootstrap"
                alt="Bootstrap"
              />
              <img
                id="node-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                title="Nodejs"
                alt="Nodejs"
              />
              <img
                id="express-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                title="Express"
                alt="Express"
              />
              <img
                id="ruby-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
                title="Ruby"
                alt="Ruby"
              />
              <img
                id="typescript-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                title="Typescript"
                alt="Typescript"
              />
              <img
                id="graphql-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                title="GraphQL"
                alt="GraphQL"
              />
              <img
                id="heroku-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
                title="Heroku"
                alt="Heroku"
              />
              <img
                id="figma-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                title="Figma"
                alt="Figma"
              />
              <img
                id="threejs-icon"
                className="icon-image four"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
                title="ThreeJS"
                alt="ThreeJS"
              />
            </Grid>
          </Grid>
          <Grid lg={2}></Grid>
          {/* <ViewportBlock2/> */}
          <Hidden xsDown>
            <Grid
              item
              className="profile-photo-div"
              direction="column"
              xs={12}
              sm={4}
            >
              <img
                className="profile-image"
                src={KevinProfilePicture}
                alt="Me!"
              ></img>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}
