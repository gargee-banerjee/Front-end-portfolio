import React from "react";
import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  const resumeLink =
    "https://drive.google.com/file/d/1-u2HQUH6kV5g1FRsG3J8onY_4IIzSp0W/view?usp=drive_link";
  return (
    <div className={classes.headerOuterContainer}>
      <div className={classes.headerInnerContainer}>
        <div className={classes.logoContainer}></div>
        <div className={classes.aboutContainer}>
          <a href="#projectSection">PROJECTS</a>
          <a href="#contactSection">CONTACT</a>
          <a href={resumeLink} target="_blank" rel="noreferrer">
            <button className={classes.resumeButtonContainer}>
              View Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
