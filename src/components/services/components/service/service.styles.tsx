import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "5px 0",
      // height: "auto",
      flexDirection: "column",
      //   padding: "10px",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#FFF",
      // height: "200px",
      // border: "2px solid red",
    },
    logo: {},
    logo__content: {
      width: "50px",
      height: "50px",
    },
    title: {
      paddingTop: "10px",
    },
    title__content: {
      fontSize: "15px",
      fontWeight: 700,
    },
    desc: {
      paddingTop: "15px",
    },
    desc__content: {
      fontSize: "11px",
    },
  })
)
