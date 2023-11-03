import { makeStyles } from "@material-ui/core";
import "../../assets/css/fontStyle.css";

export default makeStyles((theme) => ({
  introductionOuterContainer: {
    color: "#fefeff",
  },
  introductionInnerContainer: {
    padding: "1rem",
    position: "relative",
    // borderRight:"1px solid #05ddcc",
    // boxShadow: "inset -86px 0px 49px -80px #05ddcc",
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
      transform: "translateY(-85rem) scale(0)",
    },
    "100%": {
      transform: "translateY(85rem) scale(1)",
    },
  },
  backgroundImageDecorContainer: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "40rem",
    height: "40rem",
    overflow: "hidden",
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
  backImage1:{
    top: "5rem",
    width: "80%",
    right: "-20rem",
  },
  //Name style*******************************************************************************
  greetContainer: {
    fontFamily: "Roboto Condensed",
    fontSize: "2rem",
    fontWeight: "bold",
    // color: "#fefeff",
    // textAlign: "center",
    // margin: "1rem",
  },
  nameContainer: {
    fontSize: "6rem",
    fontFamily: "Alfa Slab One",
  },
  designationContainer: {},
  aboutYouContainer: {
    width: "25rem",
    color: "#a5a5ae",
    marginTop: "3rem",
  },

  //Resume style*****************************************************************************
  resumeContainer: {
    "& button": {
      padding: theme.spacing(0.5, 2),
      cursor: "pointer",
      border: "nome",
      outline: "none",
      backgroundImage: "linear-gradient(45deg, #7603CF, #05DDCC)",
      borderRadius: "5px",
      marginTop: "1rem",
    },
  },
}));
