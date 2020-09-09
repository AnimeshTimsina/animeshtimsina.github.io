import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
  logo: {
    // color: theme.palette.primary.contrastText,
    margin: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}))
