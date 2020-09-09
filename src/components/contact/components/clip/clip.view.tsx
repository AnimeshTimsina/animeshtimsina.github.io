import { Grid, IconButton, SvgIconTypeMap, Typography } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import React from "react"
import { useStyles } from "./clip.styles"

type clipProps = {
  title: string
  subtitle: string
  subtitle2?: string
  callback?: () => void
  Logo: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export const ContactClip: React.FC<clipProps> = ({
  Logo,
  subtitle,
  title,
  callback,
  subtitle2,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="row"
        wrap="nowrap"
        className={classes.grid}
      >
        <Grid item>
          <IconButton size="medium" className={classes.logo} onClick={callback}>
            <Logo />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography className={classes.title} component="div">
            {title}
          </Typography>
          <Typography className={classes.subtitle} component="div">
            {subtitle}
          </Typography>
          {subtitle2 && (
            <Typography className={classes.subtitle2} component="div">
              {subtitle2}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  )
}
