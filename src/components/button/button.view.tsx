import React from "react"
import { useStyles } from "./button.styles"

type props = { text: string; callback?: () => void }
export const CustomButton: React.FC<props> = ({ text, callback }) => {
  const classes = useStyles()
  return (
    <div className={classes.root} onClick={callback}>
      <span className={classes.button}>{text}</span>
    </div>
  )
}
