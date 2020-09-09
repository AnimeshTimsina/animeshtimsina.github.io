import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    content: {
      zIndex: 2,
      padding: "100px 100px",
    },
    header: {},
    line2: {
      marginTop: "5px",
      marginBottom: "20px",
    },
    description: {},
    description__content: {
      fontSize: "13px",
    },
    links: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    button: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  })
)
