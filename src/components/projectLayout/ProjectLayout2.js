import React from "react";
import useStyles from "./style";
import ProjectDetailsComp from "./components/ProjectDetailsComp";
import ProjectImageComp from "./components/ProjectImageComp";

function ProjectLayout2() {
  const classes = useStyles();
  return (
    <div className={classes.projectOuterContainer}>
      <div className={classes.projectInnerContainer}>
        <ProjectImageComp />
        <ProjectDetailsComp />
      </div>
    </div>
  );
}

export default ProjectLayout2;
