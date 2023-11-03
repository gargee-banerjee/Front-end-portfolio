import React from "react";
import classes from "./Style.module.css";
import {
  reactLogo,
  firebaseLogo,
  reduxLogo,
  muiLogo,
  gitLogo,
  htmlLogo,
  jsLogo,
  sqlLogo,
} from "../../assets/index";

const texkStack = [
  { name: "HTML 5", logo: htmlLogo },
  { name: "JS", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Git", logo: gitLogo },
  { name: "MySql", logo: sqlLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "Material UI", logo: muiLogo },
];
const TechStackCard = ({ item }) => {
  return (
    <div className={classes.techstackCardContainer}>
      <div className={classes.techstackLogoContainer}>
        <img src={item.logo} alt="teckstack"></img>
      </div>
      <p className={classes.teckStackTitle}>{item.name}</p>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className={classes.techstackOuterContainer}>
      <div className={classes.techstackInnerContainer}>
        {texkStack.map((item, index) => (
          <TechStackCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
