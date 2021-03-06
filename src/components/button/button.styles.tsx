import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: "50px",
    height: "50px",
    textAlign: "center",
    width: "200px",
    cursor: "pointer",
    margin: "10px",
    textTransform: "uppercase",
    color: "#FFF",
    // color: theme.palette.primary.main,
    fontWeight: 900,
    fontSize: "15px",
    transition: "all 0.5s",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      transition: "all 0.5s",
      border: "1px solid rgba(255,255,255,0.2)",
      backgroundColor: "rgba(255,255,255,0.1)",
    },
    // "&:hover": {
    //   color: "#FFF",
    // },
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      transition: "all 0.5s",
      border: "1px solid rgba(255,255,255,0.2)",
      backgroundColor: "rgba(255,255,255,0.1)",
    },
    "&:hover::before": {
      transform: "rotate(-45deg)",
      backgroundColor: "rgba(255,255,255,0)",
    },
    "&:hover::after": {
      transform: "rotate(45deg)",
      backgroundColor: "rgba(255,255,255,0)",
    },
  },
  button: {
    zIndex: 2,
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
}))
