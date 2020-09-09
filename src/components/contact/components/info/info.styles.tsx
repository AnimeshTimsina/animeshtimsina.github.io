import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
      },
    },
    content: {
      display: "flex",
      width: "fit-content",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
)
