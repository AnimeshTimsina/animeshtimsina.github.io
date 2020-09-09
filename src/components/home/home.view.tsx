import { Typography } from "@material-ui/core"
import { Sections } from "components/drawer/sections"
import React from "react"
import { useStyles } from "./home.styles"

export const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} id={Sections.HOME} data-aos="fade-down">
      <Typography className={classes.text} variant={"h1"}>
        Not Your
      </Typography>
      <Typography className={classes.text} variant={"h1"}>
        Average
      </Typography>
      <Typography className={classes.text} variant={"h1"}>
        Software
      </Typography>
      <Typography className={classes.text} variant={"h1"}>
        Engineer
      </Typography>
      <Typography className={classes.tagline}>
        {`Your plan, my execution!`}
      </Typography>
    </div>
  )
}
