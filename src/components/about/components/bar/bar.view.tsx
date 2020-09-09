import { LinearProgress, Typography } from "@material-ui/core"
import React from "react"
import { useStyles } from "./bar.styles"

type props = { title: string; value: number }

export const Bar: React.FC<props> = ({ title, value }) => {
  const classes = useStyles()
  //   const ourRef = useRef<any>(null)
  //   useLayoutEffect(() => {
  //     const topPosition = (element: HTMLElement) =>
  //       element.getBoundingClientRect().top
  //     const position = topPosition(ourRef.current)
  //     const onScroll = () => {
  //       const scrollPos = window.scrollY + window.innerHeight
  //       if (position - scrollPos < 10) {
  //         console.log("Trigger animation here")
  //       }
  //     }
  //     window.addEventListener("scroll", onScroll)
  //     return () => window.removeEventListener("scroll", onScroll)
  //   }, [])
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography component="div" className={classes.title__name}>
          {title}
        </Typography>
        <Typography component="div" className={classes.title__value}>
          {value}%
        </Typography>
      </div>
      <LinearProgress
        variant="determinate"
        value={value}
        classes={{
          root: classes.graph,
          colorPrimary: classes.graph__empty,
          barColorPrimary: classes.graph__content,
        }}
      />
    </div>
  )
}
