import React from "react";
import useStyles from "./style";
import img from "../../assets/images/background/NP5.webp";
// import img from "../../assets/images/background/NP3.png";

const Introduction = () => {
  const classes = useStyles();
  const resumeLink =
    "https://drive.google.com/file/d/1Uf8NXOWVmSFqzFzCwf2XRf9V6I7_vjMg/view?usp=sharing";
  return (
    <div className={classes.introductionInnerContainer}>
      {/* <div className={classes.decor}></div> */}
      {/* <div className={classes.backgroundImageDecorContainer}>
          <img
            src={img}
            className={`${classes.backgroundImageDecor} ${classes.backImage1}`}
            alt="backgroundImg"
          ></img>
          <img
            src={img}
            className={`${classes.backgroundImageDecor} ${classes.backImage2}`}
            alt="backgroundImg"
          ></img>
        </div> */}

       <div className={classes.nameOuterContainer}>
        <div className={classes.greetContainer}>Hey! I am</div>
        <div className={classes.nameContainer}>GARGEE</div>
      </div>
      <div className={classes.designationContainer}>FrontEnd Engineer</div>
      <div className={classes.aboutYouContainer}>
        I am a software engineer with a keen eye for building (and occasionally
        designing) interactive websites, bringing products to life.
      </div>
     <div className={classes.resumeContainer}>
        <a href={resumeLink} target="_blank" rel="noreferrer">
          <button>View Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
