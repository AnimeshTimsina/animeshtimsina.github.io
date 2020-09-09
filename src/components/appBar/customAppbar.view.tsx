import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { AppContext } from "app/context"
import { MyInfo } from "database/myInfo"
import React, { useContext } from "react"
import { useStyles } from "./customAppbar.styles"

export const CustomAppBar = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  return (
    <AppBar
      position="fixed"
      color="transparent"
      variant="elevation"
      elevation={0}
      className={classes.root}
    >
      <Toolbar>
        <IconButton
          onClick={context?.actions.displayDrawer}
          edge="start"
          aria-label="menu"
          className={classes.menuIcon}
        >
          <MenuIcon className={classes.icon} />
        </IconButton>
        <div style={{ flexGrow: 1 }}></div>
        <Typography className={classes.name}>{MyInfo.FIRST_NAME}</Typography>

        {/* <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  )
}
