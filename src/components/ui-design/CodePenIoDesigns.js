import React from "react";
import CodePenIoDesign from "./CodePenDesign";
import { signUp } from "../../assets/index";
import style from "./Style.module.css";

const CodePenIoDesigns = () => {
  const designs = [
    {
      imagePath: signUp,
      designName: "Sign Up page",
      designUrl: "https://codepen.io/ge__ge/pen/MWZmryy",
    },
  ];
  return (
    <div className={style.designsOuterContainer}>
      {designs.map((item, index) => (
        <CodePenIoDesign key={index} designItem={item} />
      ))}
    </div>
  );
};

export default CodePenIoDesigns;
