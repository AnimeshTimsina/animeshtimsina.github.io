import { IconButton, Typography } from "@material-ui/core"
import React from "react"
import { useStyles } from "./footer.styles"
import { animateScroll as scroll } from "react-scroll"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { MyInfo } from "database/myInfo"

export const Footer = () => {
  const classes = useStyles()
  const openLink = (link: string) => {
    window.open(link)
  }
  return (
    <div className={classes.root}>
      <div className={classes.copyright}>
        <Typography className={classes.copyright__content}>
          &#169;2020 {MyInfo.FIRST_NAME} {MyInfo.LAST_NAME}
        </Typography>
      </div>
      <div className={classes.backtotop}>
        <IconButton onClick={() => openLink(MyInfo.LINKED_IN_PROFILE_URL)}>
          <LinkedInIcon className={classes.mediaLogo} />
        </IconButton>
        <IconButton onClick={() => openLink(MyInfo.GITHUB_URL)}>
          <GitHubIcon className={classes.mediaLogo} />
        </IconButton>
        <IconButton
          className={classes.backToTop__logo}
          onClick={scroll.scrollToTop}
        >
          <ExpandLessIcon />
        </IconButton>
      </div>
    </div>
  )
}
