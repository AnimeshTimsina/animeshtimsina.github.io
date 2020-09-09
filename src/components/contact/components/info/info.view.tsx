import React from "react"
import { ContactClip } from "../clip/clip.view"
import { useStyles } from "./info.styles"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { Grid } from "@material-ui/core"
import { MyInfo } from "database/myInfo"

export const ContactInfo = () => {
  const classes = useStyles()
  const openLink = (link: string) => {
    window.open(link)
  }
  const sendMail = () => {
    var email = MyInfo.EMAIL
    window.location.href = "mailto:" + email
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.content}
        direction="column"
        spacing={4}
      >
        <Grid item>
          <ContactClip
            title="Email"
            subtitle={MyInfo.EMAIL}
            Logo={EmailIcon}
            callback={sendMail}
          />
        </Grid>
        <Grid item>
          <ContactClip title="Phone" subtitle={MyInfo.PHONE} Logo={PhoneIcon} />
        </Grid>
        <Grid item>
          <ContactClip
            title="LinkedIn"
            subtitle="Connect with LinkedIn"
            Logo={LinkedInIcon}
            callback={() => openLink(MyInfo.LINKED_IN_PROFILE_URL)}
          />
        </Grid>
      </Grid>
    </div>
  )
}
