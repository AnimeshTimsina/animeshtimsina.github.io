import { SvgIconTypeMap, Typography } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import React from "react"
import { useStyles } from "./progress_clip.styles"

type props = {
  Image:
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined
        }
      >
    | OverridableComponent<SvgIconTypeMap<{}, "svg">>
  title: string
  content: string
}
export const ProgressClip: React.FC<props> = ({ Image, title, content }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Image className={classes.logo__content} />
      </div>
      <div className={classes.title}>
        <Typography className={classes.title__content}>{title}</Typography>
      </div>
      <div className={classes.desc}>
        <Typography className={classes.desc__content}>{content}</Typography>
      </div>
    </div>
  )
}
