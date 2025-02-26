import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: theme.spacing(2),
    backgroundColor: "black",
    borderRadius: "20px",
    position: "relative",
    // // boxShadow: "-10px 10px 72px 15px #7603CF, 0px 0px 72px 15px #05ddcc",
    // // background: "rgb(5,221,204)",
    background:"radial-gradient(circle, rgb(95, 162, 156) 0%, rgb(37, 82, 122) 0%, rgb(4, 8, 1) 33%)",
    // zIndex: "10",
  },
}));
