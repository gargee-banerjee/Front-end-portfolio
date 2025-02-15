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
