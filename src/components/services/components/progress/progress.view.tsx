import { Grid } from "@material-ui/core"

import { ProgressData } from "database/progressData"
import React from "react"
import { ProgressClip } from "../progress_clip/progress_clip.view"
import { useStyles } from "./progress.styles"

export const Progress = () => {
  const classes = useStyles()

  // useLayoutEffect(()=>{
  //   window.addEventListener("scroll",onScroll)
  // },[])
  // const ourRef = useRef<any>(null)
  // useLayoutEffect(() => {
  //   const topPosition = (element: HTMLElement) =>
  //     element.getBoundingClientRect().top

  //   const position = topPosition(ourRef.current)
  //   // console.log("Progress top", position)
  //   // console.log(position)
  //   const onScroll = () => {
  //     console.log("ScrollY + InnerHeight", window.scrollY + window.innerHeight)
  //     console.log("Position", position)
  //     const scrollPos = window.scrollY
  //     if (position < scrollPos) {
  //       console.log("Trigger animation here")
  //     }
  //   }
  //   window.addEventListener("scroll", onScroll)
  //   return () => window.removeEventListener("scroll", onScroll)
  // }, [])
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {ProgressData.map((progress) => (
          <Grid item xs={12} sm={3} key={progress.id}>
            <ProgressClip
              Image={progress.image}
              title={progress.title}
              content={progress.content}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
