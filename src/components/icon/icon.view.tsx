import React from "react"
import { IconButton, SvgIconTypeMap } from "@material-ui/core"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { useStyles } from "./icon.styles"

type props = {
  Logo: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  callback: () => void
}

export const Icon: React.FC<props> = ({ Logo, callback }) => {
  const classes = useStyles()
  return (
    <IconButton size="medium" className={classes.logo} onClick={callback}>
      <Logo />
    </IconButton>
  )
}
