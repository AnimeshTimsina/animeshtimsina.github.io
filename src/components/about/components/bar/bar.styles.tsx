import { makeStyles, Theme, createStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "10px 0",
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      flexWrap: "nowrap",
      marginBottom: "10px",
    },
    title__name: { fontWeight: 600 },
    title__value: { fontWeight: 600 },
    graph: {
      paddingTop: "5px",
      borderRadius: "10px",
    },
    graph__empty: {
      backgroundColor: "transparent",
    },
    graph__content: {
      backgroundColor: "#FFF",
    },
  })
)
