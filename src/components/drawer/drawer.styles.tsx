import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
  root: {
    borderRight: "1px solid white",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    width: "320px",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  content: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  closeButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  closeButton: {
    fontSize: "30px",
    margin: theme.spacing(1),
  },
  darkModeSwitch: {
    marginTop: "20px",
  },
  list: {
    // padding: "0 100px",
    textAlign: "center",
  },
  listItem: {
    marginTop: "20px",
    cursor: "pointer",
    transition: "all 2s all",
    "&::after": {
      display: "inline-block",
      height: "1em",
      borderBottom: `2px solid ${
        theme.palette.type === "dark"
          ? theme.palette.secondary.dark
          : theme.palette.secondary.light
      }`,
      opacity: 0,
      content: '""',
      transition: "opacity 0.35s, width 0.35s",
      width: 0,
    },
    "&:hover::after": {
      opacity: 1,
      width: "50%",
    },
    // ".active": {
    //   borderBottom: `2px solid ${
    //     theme.palette.type === "dark"
    //       ? theme.palette.secondary.dark
    //       : theme.palette.secondary.light
    //   }`,
    // },
  },
}))
