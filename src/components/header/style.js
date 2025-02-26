import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  headerInnerContainer: {
    color: "#fefeff",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    "& a": {
      color: "#fefeff",
      textDecoration: "none",
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "0.5rem",
      "& a": {
        fontSize: "0.7rem",
      },
    },
  },
  contentSection: {
    padding: "20px",
    // border:"2px solid red",
    position: "relative",
    "& span": {
      // zIndex: 1,
    },
    "&::before": {
      content: '""',
      display:"block",
      width: "100%",
      height: "100%",
      borderRadius: "5px",
      position: "absolute",
      top: 0,
      left: 0,
      border: "1px solid rgb(111, 112, 113)",
      transform: "scale(0)",
      transition: "transform 0.2s ease-in-out",
      zIndex: -1,
    },
    "&:hover::before": {
      transform: "scale(1)",
    },
  },

  resumeButtonContainer: {
    padding: theme.spacing(0.5, 2),
    cursor: "pointer",
    border: "none",
    outline: "none",
    backgroundImage: "linear-gradient(45deg, #7603CF, #05DDCC)",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.3, 1.5),
      fontSize: "0.7rem",
    },
  },
}));
