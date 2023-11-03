import { Home } from "../index";
import React from "react";
import useStyles from "./style";
import styles from "./Style.module.css";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.animationContainer}>
        <span className={styles.obj1}></span>
        <span className={styles.obj1}></span>
        <span className={styles.obj1}></span>
        <span className={styles.obj1}></span>
        <span className={styles.obj1}></span>
      </div>
      <Home />
    </div>
  );
};

export default LandingPage;
