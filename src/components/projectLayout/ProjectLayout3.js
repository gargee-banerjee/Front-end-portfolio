import React from "react";
import useStyles from "./style";

const ProjectLayout3 = () => {
  const classes = useStyles();
  const [switchedOn, setSwitchedOn] = React.useState(false);
  const toggleSwitch = () => setSwitchedOn(!switchedOn);
  const containerClass = switchedOn
    ? classes.containerOn
    : classes.containerOff;
    console.log(containerClass,switchedOn);
  return (
    <div className={classes.projectOuterContainer3}>
      <div className={classes.projectInnerContainer3}>
        <div className={classes.container1}>
          <button onClick={toggleSwitch}>View</button>
        </div>
        <div className={`${classes.container} ${containerClass}`}>
          <h3>eCommerce</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout3;
