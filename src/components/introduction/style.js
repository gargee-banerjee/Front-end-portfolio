import { makeStyles } from "@material-ui/core";
import "../../assets/css/fontStyle.css";

export default makeStyles((theme) => ({
  introductionInnerContainer: {
    position: "relative",
    color: "#fefeff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "5rem 0.5rem",
    // fontFamily: "Passion One",
  },
  //Decor******************************
  decor: {
    position: "relative",
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    backgroundImage: "linear-gradient(45deg, #7603CF, #05DDCC)",
    animation: "$animateBall 4s infinite alternate",
  },
  "@keyframes animateBall": {
    "0%": {
      transform: "translateY(-30rem) scale(0)",
    },
    "100%": {
      transform: "translateY(30rem) scale(1)",
    },
  },
  backgroundImageDecorContainer: {
    position: "absolute",
    top: "10",
    right: "0",
    width: "40rem",
    height: "40rem",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      height: "20rem",
    },
  },
  backgroundImageDecor: {
    position: "absolute",
    top: "-5rem",
    right: "-15rem",
    width: "120%",
    opacity: "0.5",
  },
  backImage2: {
    transform: "rotate(20deg)",
  },
  backImage1: {
    top: "5rem",
    width: "80%",
    right: "-20rem",
  },
  //Name style*******************************************************************************
  nameOuterContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  greetContainer: {
    fontFamily: "Roboto Condensed",
    fontSize: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  nameContainer: {
    fontSize: "6rem",
    fontFamily: "Alfa Slab One",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  designationContainer: {},
  aboutYouContainer: {
    width: "25rem",
    color: "#a5a5ae",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "0.7rem",
    },
  },

  //Resume style*****************************************************************************
  resumeContainer: {
    "& button": {
      padding: theme.spacing(0.5, 2),
      cursor: "pointer",
      border: "none",
      outline: "none",
      backgroundImage: "linear-gradient(45deg, #7603CF, #05DDCC)",
      borderRadius: "5px",
      marginTop: "1rem",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.3, 1.5),
        fontSize: "0.7rem",
      },
    },
  },
}));
