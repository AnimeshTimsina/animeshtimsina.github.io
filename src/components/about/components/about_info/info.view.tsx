import { Typography } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import { CustomButton } from "components/button/button.view"
import { Icon } from "components/icon/icon.view"
import LineTitle from "components/line-title"
import PageTitle from "components/page-title"
import Particle from "components/particle"
import { ABOUT_DATA } from "database/about"
import { MyInfo } from "database/myInfo"
import React from "react"
import { useStyles } from "./info.styles"
// import test from "database/resume.pdf"

export const AboutInfo = () => {
  const classes = useStyles()
  const openLink = (link: string) => {
    window.open(link)
  }
  return (
    <div className={classes.root} data-aos="zoom-in">
      <Particle />
      <div className={classes.content}>
        <LineTitle title="About Me" />
        <div className={classes.header}>
          <PageTitle title={ABOUT_DATA.TITLE} />
        </div>
        <div className={classes.line2}>
          <LineTitle title={""} />
        </div>
        <div className={classes.description}>
          <Typography className={classes.description__content}>
            {ABOUT_DATA.CONTENT}
          </Typography>
        </div>
        <div className={classes.links}>
          <Icon
            Logo={FacebookIcon}
            callback={() => openLink(MyInfo.FACEBOOK_PROFILE_URL)}
          ></Icon>
          <Icon
            Logo={GitHubIcon}
            callback={() => openLink(MyInfo.GITHUB_URL)}
          ></Icon>
          <Icon
            Logo={TwitterIcon}
            callback={() => openLink(MyInfo.TWITTER_PROFILE_URL)}
          ></Icon>
          <Icon
            Logo={LinkedInIcon}
            callback={() => openLink(MyInfo.LINKED_IN_PROFILE_URL)}
          ></Icon>
        </div>
        <div className={classes.button}>
          <a
            href={"resume.pdf"}
            // target="_blank"
            // rel="noopener noreferrer"
            download
          >
            <CustomButton text="Resume" />
          </a>
        </div>
      </div>
    </div>
  )
}
