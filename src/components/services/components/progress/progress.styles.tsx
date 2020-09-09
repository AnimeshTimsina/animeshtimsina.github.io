import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFF",
    },
  })
)
