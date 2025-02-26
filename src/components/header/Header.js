import React from "react";
import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  const resumeLink =
    "https://drive.google.com/file/d/1-u2HQUH6kV5g1FRsG3J8onY_4IIzSp0W/view?usp=drive_link";
  return (
      <div className={classes.headerInnerContainer}>
        <div className={classes.aboutContainer}>
          {/* <a href="#projectSection">PROJECTS</a> */}
          <a className={classes.contentSection} href="#projectSection">
            <span>PROJECTS</span>
          </a>
          <a href="#contactSection">CONTACT</a>
          <a href={resumeLink} target="_blank" rel="noreferrer">
            <button className={classes.resumeButtonContainer}>
              View Resume
            </button>
          </a>
        </div>
      </div>
  );
};

export default Header;
