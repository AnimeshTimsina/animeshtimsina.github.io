import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core"
import React from "react"
import { useStyles } from "./projectCard.styles"

export interface ProjectsListProp {
  id: string
  Logo: string
  title: string
}

export type projectCardProps = {
  id: string
  title: string
  background: string
  images?: Array<string>
  frameworks: Array<ProjectsListProp>
}
export const ProjectCard: React.FC<projectCardProps> = ({
  title,
  background,
  frameworks,
}) => {
  const classes = useStyles({ background: background })
  const animationList = [
    "flip-left",
    "flip-right",
    "flip-up",
    "flip-down",
    "zoom-in",
  ]

  return (
    <Card
      className={classes.root}
      variant="outlined"
      data-aos={animationList[Math.floor(Math.random() * animationList.length)]}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <List component="div" aria-label="frameworks">
          {frameworks.map((item) => (
            <ListItem key={item.id}>
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <img src={item.Logo} className={classes.logo} />
                {/* <item.Logo className={classes.logo} /> */}
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={item.title}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
