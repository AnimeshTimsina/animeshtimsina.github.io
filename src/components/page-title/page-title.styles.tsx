import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 900,
      fontSize: "60px",
      lineHeight: "60px",
    },
  })
)
