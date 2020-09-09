import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: "20px 10px",
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
      width: "30px",
      height: "30px",
    },
    title: {
      //   paddingTop: "px",
    },
    title__content: {
      fontSize: "15px",
      fontWeight: 700,
    },
    desc: {},
    desc__content: {
      paddingTop: "5px",
      fontWeight: 700,
      fontSize: "12px",
    },
  })
)
