import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      width: "100vw",
    },
    grid: {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
    },
  })
)
