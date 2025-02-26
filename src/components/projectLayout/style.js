import { makeStyles } from "@material-ui/core";
import "../../assets/css/fontStyle.css";

export default makeStyles((theme) => ({
  projectOuterContainer: {
    boxSizing: "border-box",
    position: "relative",
    height: "600px",
    backgroundColor: "#393e591f",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
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

  projectInnerContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "auto",
    overflow: "hidden",
    height: "100%",
  },

  //Project details style*******************************************************************************************

  //gap:1rem
  // fontSize: "2.5rem",title
  //padding: 1rem
  projectDetailsOuterContainer: {
    gridColumn: "1/2",
    justifySelf: "end",
    alignSelf: "center",
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
    fontFamily: "Alfa Slab One",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },

  projectDescriptionContainer: {
    fontSize: "1rem",
    width: "15rem",
    fontWeight: "lighter",
    color: "#fefeff",
    whiteSpace: "normal",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
      width: "auto",
    },
  },
  projectTechStackContainer: {
    display: "flex",
    gap: "0.5rem",
    "& > img": {
      width: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        width: "1rem",
      },
    },
  },
  projectLinksContainer: {
    display: "flex",
    gap: "1rem",
    "& button": {
      padding: theme.spacing(0.5, 3.5),
      cursor: "pointer",
      border: "nome",
      outline: "none",
      backgroundImage: "linear-gradient(45deg, #7603CF, #05DDCC)",
      borderRadius: "5px",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.2, 2),
      },
    },
  },

  //Project image style*******************************************************************************************
  projectImageOuterContainer: {
    gridColumn: "2/3",
    justifySelf: "start",
    alignSelf: "center",
    position: "relative",
  },
  projectImageInnerContainer1: {
    // position: "absolute",
    // top: "-100px",
    // left:"-120px",
    width: "200px",
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  projectImageInnerContainer2: {
    position: "absolute",
    width: "200px",
    top: "100px",
    left: "100px",
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      left: "40px",
    },
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
