import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // background: "blue",
      minHeight: "100vh",
      color: "#FFF",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    header: {
      padding: "50px 100px 0 100px",
      [theme.breakpoints.down("xs")]: {
        padding: "50px 30px",
      },
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 100px",
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
      [theme.breakpoints.down("xs")]: {
        padding: "0 30px",
      },
    },
    services: {
      marginTop: "auto",
      // paddingTop: "50px",
      // margin: "auto",
      width: "100%",
      minHeight: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    services__content: {
      width: "90%",
      height: "100%",
    },
    progress: {
      background: theme.palette.primary.dark,
      // marginTop: "auto",
    },
  })
)
