import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  landingPageContainer: {
    width: "100%",
    height: "100vh",
    padding: theme.spacing(5, 50),
    backgroundColor: "black",
    // backgroundImage: "linear-gradient(45deg,#7603cf,#05ddcc,#6f1569)",
    backgroundSize: "400%",
    animation: "$bg-animation 5s infinite alternate",

    position: "relative",
  },
  "@keyframes bg-animation": {
    "0%": {
      backgroundPosition: "left",
    },
    "100%": {
      backgroundPosition: "right",
    },
  },
  animationContainer: {
    "& span": {
      width: "30px",
      height: "30px",
      display:"flex",
      position:"relative",
      background: "#7603cf",
      margin: "0 1rem",
      borderRadius: "50%",
      boxShadow: "0 0 8px 7px #6a3397, 0px 0px 37px 24px #ac59f2, 0 0  69px 52px #a674cc",
      animation: "$animate 3s linear infinite",
      // display:"inline-block",
      // animation: "pulse 1s infinite",
      zIndex:"10",
    },
  },
  "@keyframes animate": {
    "0%": {
      transform: "translateY(100vh)  translateX(100vh)",
    },
    "100%": {
      transform: "translateY(-100vh) translateX(-100vh) ",
    },
  },
}));
