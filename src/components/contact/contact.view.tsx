import { Grid } from "@material-ui/core"
import { Sections } from "components/drawer/sections"
import LineTitle from "components/line-title"
import PageTitle from "components/page-title"
import React from "react"
import ContactForm from "./components/form"
import ContactInfo from "./components/info"
import { useStyles } from "./contact.styles"

export const Contact = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} data-aos="fade-down">
      <div className={classes.header}>
        <LineTitle title="Contact" />
        <PageTitle title="Get In Touch" />
      </div>

      <Grid
        container
        className={classes.content}
        spacing={2}
        id={Sections.CONTACT}
      >
        <Grid item md={5} xs={12}>
          <div className={classes.contact_info}>
            <ContactInfo />
          </div>
        </Grid>
        <Grid item md={7} xs={12}>
          <div className={classes.contact_form}>
            <ContactForm />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
