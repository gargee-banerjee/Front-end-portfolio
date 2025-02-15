import React from "react";
import {
  Caption,
  Contact,
  Header,
  Introduction,
  ProjectLayout1,
  TechStack,
  CodePenIoDesigns
} from "components";
import useStyle from "./style";

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.homeContainer}>
      <Header />
      <Introduction /> 
   <Caption caption1="TechStack" caption2={``} />
      <TechStack />
         {/* <Caption caption1="Live" caption2={`Projects`} />
      <ProjectLayout1 />
      <Caption caption1="My" caption2={`Designs`} />
      <CodePenIoDesigns/>
      <Caption caption1="Get" caption2={`in touch`} />
      <Contact />  */}
    </div>
  );
};

export default Home;
