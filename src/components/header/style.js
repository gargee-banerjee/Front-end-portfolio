import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  headerOuterContainer: {
    color: "#fefeff",
  },
  headerInnerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    "& a": {
      color:"#fefeff",
      textDecoration: "none",
    },
  },

  resumeButtonContainer: {
    padding: theme.spacing(0.5, 2),
    cursor: "pointer",
    border: "nome",
    outline: "none",
    backgroundImage: "linear-gradient(45deg, #7603CF, #05DDCC)",
    borderRadius: "5px",
  },
}));
