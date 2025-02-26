import React from "react";
import style from "./Style.module.css";

const CodePenDesign = (props) => {
  const { imagePath, designName, designUrl } = props.designItem;
  return (
    <a href={designUrl} target="_blank" rel="noreferrer"  className={style.designLinkContainer}>
      <div className={style.designOuterContainer}>
        <div className={style.designImageContainer}>
          <img src={imagePath} alt="ui-design"></img>
        </div>
        <div className={style.designNameContainer}>{designName}</div>
        <div className={style.designViewContainer}>
          <div>View</div>
        </div>
      </div>
    </a>
  );
};

export default CodePenDesign;
