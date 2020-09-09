import { createStyles, makeStyles, Theme } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      minHeight: "100vh",
      color: "#FFF",
    },
    grid: {
      //   padding: "50px 0",
      [theme.breakpoints.up("sm")]: {
        minHeight: "100vh",
      },
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        padding: "0 30px",
      },
    },
    title: {
      background: theme.palette.primary.dark,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        background: "transparent",
        paddingTop: "30px",
        alignItems: "flex-start",
      },
      //   [theme.breakpoints.down("xs")]: {
      //     background: theme.palette.secondary.dark,
      //   },
    },
    title__content: {
      fontWeight: 900,
      fontSize: "60px",
      //   padding: "10px",
      writingMode: "vertical-lr",
      letterSpacing: "10px",
      [theme.breakpoints.down("xs")]: {
        writingMode: "horizontal-tb",
        fontSize: "40px",
        letterSpacing: "2px",
      },
    },
    headerForMobile: {},
    content: {
      width: "100%",
      // height: "100%",
    },
  })
)
