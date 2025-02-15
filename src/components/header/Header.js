import React from "react";
import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  const resumeLink =
    "https://drive.google.com/file/d/1Uf8NXOWVmSFqzFzCwf2XRf9V6I7_vjMg/view?usp=sharing";
  return (
    <div className={classes.headerInnerContainer}>
      <div className={classes.aboutContainer}>
        <a href="#projectSection">PROJECTS</a>
        <a href="#contactSection">CONTACT</a>
        <a href={resumeLink} target="_blank" rel="noreferrer">
          <button className={classes.resumeButtonContainer}>View Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
