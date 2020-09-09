import { createStyles, makeStyles, Theme } from "@material-ui/core"

export type styleProps = { background: string }
export const useStyles = makeStyles<Theme, styleProps>((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      marginTop: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(3),
      },
      backgroundImage: (
        props
      ) => `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
      url(${props.background})`,
      backgroundSize: "cover",
      cursor: "pointer",
      "&:hover": {
        transform: `scale(1.02)`,
        // backgroundImage: (
        //   props
        // ) => `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        // url(${props.background})`,
      },
      // color: "#FFF",
    },
    title: {
      fontSize: "20px",
      // color: "#FFF",
      // fontWeight: 700,
    },
    listItemText: {
      fontSize: "15px",
    },
    logo: {
      position: "relative",
      width: 20,
      height: 20,
    },
    listItemIcon: {
      minWidth: 0,
      marginRight: 12,
    },
  })
)
