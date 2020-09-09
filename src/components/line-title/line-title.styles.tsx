import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
    },
    line: {
      marginLeft: 0,
      border: `2px solid ${theme.palette.secondary.main}`,
      height: "0.08em",
      backgroundColor: `${theme.palette.secondary.main}`,
      borderRadius: "5px",
      width: "80px",
      marginRight: "18px",
      [theme.breakpoints.down("xs")]: {
        width: "50px",
      },
    },
    title__content: {
      fontSize: "20px",
      fontWeight: 600,
    },
  })
)
