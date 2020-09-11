import { Backdrop, CircularProgress } from "@material-ui/core"
import React from "react"
import { useStyles } from "./spinner.styles"

type props = { open: boolean }

export const Spinner: React.FC<props> = ({ open }) => {
  const classes = useStyles()
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
