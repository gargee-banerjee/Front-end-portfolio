import React from "react";
import useStyles from "../style";
import img1 from "../../../assets/images/project1/projectSS3.png";
import img2 from "../../../assets/images/project1/projectSS4.png";

const ProjectImageComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.projectImageOuterContainer}>
      <div className={classes.projectImageInnerContainer1}>
        <img src={img2} alt="project"></img>
      </div>
      <div className={classes.projectImageInnerContainer2}>
        <img src={img1} alt="project"></img>
      </div>
    </div>
  );
};

export default ProjectImageComp;
