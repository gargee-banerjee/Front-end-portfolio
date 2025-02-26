import React from "react";
import useStyles from "./style";
import ProjectDetailsComp from "./components/ProjectDetailsComp";
import ProjectImageComp from "./components/ProjectImageComp";
import { pjt9 } from "../../assets/index";

function ProjectLayout1() {
  const classes = useStyles();
  const decorImage = pjt9;

  return (
    <div id="projectSection" className={classes.projectOuterContainer}>
      <div
        className={`${classes.backgroundImageContainer} ${classes.backgroundImageContainerLeft}`}
      >
        <img src={decorImage} alt="background"></img>
      </div>
      <div
        className={`${classes.backgroundImageContainer} ${classes.backgroundImageContainerRight}`}
      >
        <img src={decorImage} alt="background"></img>
      </div>
      <div className={classes.projectInnerContainer}>
        <ProjectDetailsComp />
        <ProjectImageComp />
      </div>
    </div>
  );
}

export default ProjectLayout1;
