import LineTitle from "components/line-title"
import { useVisibility } from "hooks/useVisibility"
import React, { useEffect, useState } from "react"
import { Bar } from "../bar/bar.view"
import { useStyles } from "./chart.styles"
import { ChartData } from "../../../../database/chartData"
//

export type progressValueProps = {
  title: string
  initialValue: number
  maxValue: number
  completed: boolean
}

export const AboutChart = () => {
  const classes = useStyles()
  const { isVisible, currentElement } = useVisibility(-100, 0)
  const [progressValues, setProgressValues] = useState<
    Array<progressValueProps>
  >(ChartData)

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgressValues((prevValues) => {
          let remaining = prevValues.find((obj) => obj.completed === false)
          !remaining && clearInterval(interval)
          return prevValues.map((obj) => {
            return {
              ...obj,
              completed: obj.initialValue + 5 === obj.maxValue,
              initialValue:
                obj.initialValue + 5 !== obj.maxValue
                  ? obj.initialValue + 5
                  : obj.initialValue,
            }
          })
        })
      }, 1)
    }
  }, [isVisible])

  return (
    <div className={classes.root} data-aos="zoom-in">
      {/* {console.log("visible or not?", isVisible)} */}
      <div className={classes.content}>
        <LineTitle title="My Skills" />
        <div className={classes.graph} ref={currentElement}>
          {ChartData.map((data) => (
            <Bar
              key={data.title}
              title={data.title}
              value={
                progressValues.find((e) => e.title === data.title)
                  ?.initialValue || 0
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
