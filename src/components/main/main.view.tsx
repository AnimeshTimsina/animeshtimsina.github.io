import About from "components/about"
import CustomAppBar from "components/appBar"
import Contact from "components/contact"
import Footer from "components/footer"
import Home from "components/home"
import Projects from "components/projects"
import Services from "components/services"
import React from "react"
import { useStyles } from "./main.styles"
// import { Waypoint } from "react-waypoint"

export const Main = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <CustomAppBar />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
