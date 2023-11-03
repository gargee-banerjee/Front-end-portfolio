import React from "react";
import useStyles from "../style";
import { Typography } from "@material-ui/core";
import {
  reactLogo,
  reduxLogo,
  firebaseLogo,
  muiLogo,
  pjt3,
  pjt4,
  pjt5,
  pjt7,
} from "../../../assets/index";

const ProjectDetailsComp = () => {
  const classes = useStyles();
  const codeLink = "https://github.com/gargee-banerjee/React-Redux-ECommerce";
  const projectLink = "https://e-commerce-c7bbf.web.app/";
  return (
    <div className={classes.projectDetailsOuterContainer}>
      <div className={classes.projectTitleContainer}>ECommerce Site</div>
      <div className={classes.projectDescriptionContainer}>
        This is an responsive eCommerce platform made using React JS, Redux,
        Material UI, Firebase (authentication), Firestore, CommerJS.
      </div>
      <div className={classes.projectTechStackContainer}>
        <img src={reactLogo} alt="react"></img>
        <img src={reduxLogo} alt="react"></img>
        <img src={firebaseLogo} alt="react"></img>
        <img src={muiLogo} alt="react"></img>
      </div>
      <div className={classes.projectLinksContainer}>
        <a href={projectLink} target="_blank" rel="noreferrer">
          <button>Live</button>
        </a>
        <a href={codeLink} target="_blank" rel="noreferrer">
          <button>Code</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsComp;
