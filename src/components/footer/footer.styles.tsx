import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#FFF",
    background: "#171717",
    width: "100%",
    height: "50px",
    bottom: 0,
    marginTop: "20px",
  },
  copyright: {
    paddingLeft: "70px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
    },
    // margin: theme.spacing(5),
  },
  copyright__content: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "12px",
  },
  backtotop: {
    paddingRight: "20px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10px",
    },
    display: "flex",
  },
  mediaLogo: {
    fontSize: "18px",
  },
  backToTop__logo: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}))
