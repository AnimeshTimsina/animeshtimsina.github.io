import { makeStyles } from "@material-ui/core"
import { red } from "@material-ui/core/colors"

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "70px",
    color: red[900],
  },
  text: {
    fontSize: "25px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
}))
