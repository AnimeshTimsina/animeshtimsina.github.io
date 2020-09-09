import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.primary.dark,
      color: "white",
    },
    content: {
      width: "80%",
      // height: "80%",
      padding: "60px 10px",
    },
    graph: {},
  })
)
