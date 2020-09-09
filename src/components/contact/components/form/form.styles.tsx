import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    contact: {},
    contact__form: {},
    formField: {
      marginBottom: theme.spacing(2),
    },
    formInput: {
      fontSize: "18px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
    formLabel: {
      fontSize: "18px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
  })
)
