import { makeStyles } from "@material-ui/core";
import "../../assets/css/fontStyle.css";

export default makeStyles((theme) => ({
  projectOuterContainer: {
    boxSizing: "border-box",
    position: "relative",
    height: "600px",
    backgroundColor: "#393e591f",
  },
  projectInnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    height: "100%",
  },

  //Background absolute positioned Images******************************************************
  backgroundImageContainer: {
    position: "absolute",
    top: "0px",
    width: "200px",
    height: "100%",
    overflow: "hidden",
    "& img": {
      width: "400%",
      objectFit: "cover",
      objectPosition: "-240px -95px",
      opacity: "0.1",
    },
  },
  backgroundImageContainerLeft: {
    left: "0px",
  },
  backgroundImageContainerRight: {
    right: "0px",
  },

  //Project details style*******************************************************************************************

  //gap:1rem
  // fontSize: "2.5rem",title
  //padding: 1rem
  projectDetailsOuterContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "1rem",
    gap: "0.5rem",
  },
  projectTitleContainer: {
    color: "#fefeff",
    fontSize: "2.5rem",
    fontWidth: "bold",
    whiteSpace: "pre",
    fontFamily: 'Alfa Slab One',
  },
  projectDescriptionContainer: {
    width: "20rem", //check
    fontSize: "1rem",
    fontWeight: "lighter",
    color: "#fefeff",
    whiteSpace: "normal",
    textAlign: "right",
  },
  projectTechStackContainer: {
    display: "flex",
    gap: "0.5rem",
    "& > img": {
      width: "1.5rem",
    },
  },
  projectLinksContainer: {
    display: "flex",
    gap: "1rem",
    "& button": {
      padding: theme.spacing(0.5, 3.5),
      cursor: "pointer",
      border:"nome",
      outline:"none",
      backgroundImage:
        "linear-gradient(45deg, #7603CF, #05DDCC)",
      borderRadius: "5px",
    },
  },

  //Project image style*******************************************************************************************
  projectImageOuterContainer: {
    // border: "7px solid red",
    position: "relative",
  },
  projectImageInnerContainer1: {
    position: "absolute",
    top: "-250px",
    width:"200px",
    "& img":{
      width:"100%",
    },
    // transform: "rotate(-18.77deg)",
  },
  projectImageInnerContainer2: {
    position: "absolute",
    width: "200px",
    top: "-100px",
    left: "100px",
    "& img": {
      width: "100%",
    },
    // transform: "rotate(18.77deg)",
  },

  // test
  container: { width: "400px", height: "400px", margin: "80px auto" },
  containerOn: {
    backgroundColor: "red",
    backgroundImage:
      "linear-gradient(45deg, #E0BBE4, #957DAD, #D291BC, #FEC8D8, #FFDFD3)",
    backgroundSize: "400%",
    // animation:"gradient 3s ease infinite",
    // backgroundPosition:"left",
    // transition: "background-position 0.5s ease",
    animation: "$bg-animation  10s infinite alternate",
    // "&:hover": {
    //   backgroundPosition: "right",
    // },
  },
  "@keyframes bg-animation": {
    "0%": {
      backgroundPosition: "left",
    },
    "100%": {
      backgroundPosition: "right",
    },
  },
  containerOff: {
    backgroundColor: "black",
  },
}));
