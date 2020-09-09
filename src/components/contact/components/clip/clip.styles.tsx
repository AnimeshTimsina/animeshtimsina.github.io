import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#FFF",
    },
    grid: {},
    logo: {
      color: theme.palette.secondary.main,
    },
    title: {
      fontSize: "20px",
      fontWeight: 700,
    },
    subtitle: {
      fontSize: "14px",
    },
    subtitle2: {},
  })
)
