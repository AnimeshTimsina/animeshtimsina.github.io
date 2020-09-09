import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "80vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      color: "#FFF",
    },
    header: {
      padding: "50px 100px 0 100px",
      [theme.breakpoints.down("xs")]: {
        padding: "50px 30px",
      },
    },
    content: {
      //   display: "flex",
      margin: "auto",
      width: "70%",
      [theme.breakpoints.down("md")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        padding: "0 30px",
      },
    },
    contact_info: {
      //   background: "red",
      height: "100%",
      // border: "1px solid grey",
    },
    contact_form: {},
    contact: {
      width: "70%",
    },
  })
)
