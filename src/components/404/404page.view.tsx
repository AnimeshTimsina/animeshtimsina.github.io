import { Typography } from "@material-ui/core"
import { CustomButton } from "components/button/button.view"
import React from "react"
import { useStyles } from "./404.styles"
import { useHistory } from "react-router-dom"
import ErrorIcon from "@material-ui/icons/Error"

export const NotFoundPage = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <div className={classes.root}>
      <ErrorIcon className={classes.icon} />
      <Typography component="div" className={classes.text}>
        Page Not Found
      </Typography>
      <CustomButton
        text="Return to website"
        callback={() => history.push("/")}
      />
    </div>
  )
}
