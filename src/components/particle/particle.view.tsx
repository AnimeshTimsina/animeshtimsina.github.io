import React from "react"
import Particles from "react-tsparticles"
import { useTheme } from "@material-ui/core"
import { useStyles } from "./particle.styles"

export const Particle = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Particles
      className={classes.root}
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.2,
              size: 30,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme.palette.type === "dark" ? "#ffffff" : "#000000",
          },
          links: {
            color: theme.palette.type === "dark" ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
