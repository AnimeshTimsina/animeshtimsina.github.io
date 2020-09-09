import { Grid, useMediaQuery, useTheme } from "@material-ui/core"
import { Sections } from "components/drawer/sections"
import React from "react"
import { useStyles } from "./about.styles"
import AboutChart from "./components/about_chart"
import AboutInfo from "./components/about_info"

export const About = () => {
  const classes = useStyles()
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <div
      className={classes.root}
      id={Sections.ABOUT}
      onAnimationStart={() => console.log("Animation ended")}
    >
      <Grid
        container
        direction={smallScreen ? "column" : "row"}
        className={classes.grid}
        wrap={"nowrap"}
      >
        <Grid
          md={6}
          item
          style={{
            height: smallScreen ? "100%" : "auto",
          }}
        >
          <AboutInfo />
        </Grid>
        <Grid
          md={6}
          item
          style={{
            height: smallScreen ? "100%" : "auto",
          }}
        >
          <AboutChart />
        </Grid>
      </Grid>
    </div>
  )
}
