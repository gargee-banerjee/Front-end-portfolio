import { makeStyles } from "@material-ui/core";
import "../../assets/css/fontStyle.css";

export default makeStyles((theme) => ({
  captionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "fles-start",
    alignItems: "flex-start",
    position: "relative",
    marginTop: "15rem",
    color: "#444e67",
    fontSize: "7rem",
    fontFamily: "Passion One",
  },
  caption1: {
    position: "relative",
  },
  decor: {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "1px",
    height: "1px",
    background: "#7603cf",
    // boxShadow:"1px 1px 10px #7603cf",
    // boxShadow: "0 0 51px 33px #6a3397, 0px 0px 72px 26px #ac59f2,0 0 102px 86px #773da4, 0 0 69px 52px #a674cc",
    boxShadow:
      "0 0 10px 0px #f0f0f0, 0px 0px 82px 0px #605866,0 0 110px 73px #704195, 0 0 90px 0px #bba8ca",
    // boxShadow:"0 0 10px 0px #6a3397, 0px 0px 82px 0px #ac59f2,0 0 100px 86px #773da4, 0 0 100px 00px #a674cc",
  },
  caption: {
    // textShadow: "1px 1px 10px #7603cf",
    // filter: "drop-shadow(1px 1px 10px #7603cf)",
  },
}));
