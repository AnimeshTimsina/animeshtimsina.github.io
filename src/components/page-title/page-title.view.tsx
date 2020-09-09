import React from "react"
import { useStyles } from "./page-title.styles"
import { Typography } from "@material-ui/core"

type props = { title: string }
export const PageTitle: React.FC<props> = ({ title }) => {
  const classes = useStyles()
  return (
    <Typography variant="h6" className={classes.title}>
      {title}
    </Typography>
  )
}
