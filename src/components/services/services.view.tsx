import { Grid } from "@material-ui/core"
import { Sections } from "components/drawer/sections"
import LineTitle from "components/line-title"
import PageTitle from "components/page-title"
import React from "react"
import { Progress } from "./components/progress/progress.view"
import Service from "./components/service"
import { ServiceData } from "../../database/services.data"
import { useStyles } from "./services.styles"

type sizeProps =
  | boolean
  | "auto"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | undefined
export const Services = () => {
  const classes = useStyles()
  const mid: sizeProps = 4
  const small: sizeProps = 6
  const extraSmall: sizeProps = 12
  const getAnimation = (id: number) => {
    if (id === 0) return "fade-right"
    if (id === 1) return "fade-down"
    if (id === 2) return "fade-left"
    if (id === 3) return "fade-right"
    if (id === 4) return "fade-left"
    // if (id === 5) return "fade-left"
    else return "fade-down"
  }
  // useEffect(() => {
  //   const handleScroll = () => console.log("Trigerr")
  //   document.addEventListener("aos:in", () => console.log("animated in"))
  // })
  return (
    <div className={classes.root} data-aos="fade-down" id={Sections.SERVICES}>
      <div className={classes.header}>
        <LineTitle title="Services" />
        <PageTitle title="What I Do" />
      </div>
      <div className={classes.content}>
        <div className={classes.services}>
          <Grid
            container
            className={classes.services__content}
            spacing={2}
            justify="space-evenly"
          >
            {ServiceData.map((data, idx) => (
              <Grid
                key={data.id}
                item
                md={mid}
                sm={small}
                xs={extraSmall}
                data-aos={getAnimation(idx)}
              >
                <Service
                  Image={data.image}
                  title={data.title}
                  content={data.content}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <div className={classes.progress}>
        <Progress />
      </div>
    </div>
  )
}
