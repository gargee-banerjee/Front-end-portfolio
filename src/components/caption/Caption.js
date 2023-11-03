import React from "react";
import useStyles from "./style";

const Caption = ({ caption1, caption2 }) => {
  const classes = useStyles();
  return (
    <div className={classes.captionContainer}>
      <span className={`${classes.caption1} ${classes.caption}`}>
        <div className={classes.decor}></div>
        {caption1}
      </span>
      <span className={`${classes.caption1} ${classes.caption}`}>
        {caption2}
      </span>
    </div>
  );
};

export default Caption;
