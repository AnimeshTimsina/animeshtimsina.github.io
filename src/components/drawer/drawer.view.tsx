import { Drawer, IconButton, Typography } from "@material-ui/core"
import ClearRoundedIcon from "@material-ui/icons/ClearRounded"
import React, { useContext } from "react"
import { Link } from "react-scroll"
import { AppContext } from "../../app/context"
import { useStyles } from "./drawer.styles"
import { allSections } from "./sections"

export const CustomDrawer = () => {
  const context = useContext(AppContext)
  const classes = useStyles()
  return (
    <>
      <Drawer
        classes={{
          paper: classes.root,
        }}
        transitionDuration={{
          enter: 500,
          exit: 400,
        }}
        elevation={0}
        anchor={"left"}
        open={context?.state.drawerStatus}
        onClose={context?.actions.hideDrawer}
      >
        <div className={classes.content}>
          <div className={classes.closeButtonContainer}>
            <IconButton onClick={context?.actions.hideDrawer} color="secondary">
              <ClearRoundedIcon className={classes.closeButton} />
            </IconButton>
          </div>
          <div className={classes.list}>
            {allSections.map((section) => (
              <Link
                key={section.id}
                to={section.name}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <div
                  className={classes.listItem}
                  onClick={context?.actions.hideDrawer}
                >
                  <Typography variant="h6">{section.name}</Typography>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  )
}
