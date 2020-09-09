import { makeStyles, Theme } from "@material-ui/core"
import Code from "images/code_bg.jpg"

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#FFF",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${Code})`,
    overflowY: "hidden",
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
      lineHeight: "60px",
    },
  },
  tagline: {
    marginTop: "20px",
    fontFamily: "Source Code Pro,monospace",
    // textTransform: "uppercase",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
    // fontWeight: 600,
    borderRight: `solid 3px ${theme.palette.secondary.main}`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    color: "rgba(255,255,255,.70)",
    animation: `$animated-text 4s steps(29,end) 1s 1 normal both,
    $animated-cursor 600ms steps(29,end) infinite`,
  },
  tagLineEmphasis: {
    fontStyle: "italic",
  },
  /* text animation */

  "@keyframes animated-text": {
    from: { width: 0 },
    to: {
      width: 275,
      // width: (props) => (props.isSmall ? 200 : 400),
    },
  },

  /* cursor animations */

  "@keyframes animated-cursor": {
    from: { borderRightColor: theme.palette.primary.main },
    to: { borderRightColor: "transparent" },
  },
}))
