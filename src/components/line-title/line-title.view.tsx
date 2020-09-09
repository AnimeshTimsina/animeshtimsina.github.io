import React from "react"
import { useStyles } from "./line-title.styles"
import { Typography } from "@material-ui/core"

type props = { title: string }
export const LineTitle: React.FC<props> = ({ title }) => {
  const classes = useStyles()
  return (
    <div className={classes.title}>
      <hr className={classes.line} />
      <Typography component="div" className={classes.title__content}>
        {title}
      </Typography>
    </div>
  )
}
