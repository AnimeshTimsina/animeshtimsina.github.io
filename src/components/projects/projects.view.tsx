import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core"
// import zIndex from "@material-ui/core/styles/zIndex"
import { Sections } from "components/drawer/sections"
import LineTitle from "components/line-title"
import PageTitle from "components/page-title"
import { projectsData } from "database/projectsData"
import { useVisibility } from "hooks/useVisibility"
// import { useAppearCheck } from "hooks/useAppearCheck"
import React, { useEffect, useState } from "react"
import Lightbox from "react-image-lightbox"
import { useDencrypt } from "use-dencrypt-effect"
import ProjectCard from "./projectCard"
import { useStyles } from "./projects.styles"

export const Projects = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"))
  const { isVisible, currentElement } = useVisibility(-20, 0)
  const { dencrypt, result } = useDencrypt()
  useEffect(() => {
    if (isVisible) {
      dencrypt("PROJECTS")
    }
  }, [isVisible, dencrypt])
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [images, setImages] = useState<Array<string | null>>([])
  const handleClick = (images: Array<string>) => {
    setIsOpen(true)
    setImages(images)
  }
  return (
    <div className={classes.root} id={Sections.PROJECTS}>
      <Grid container className={classes.grid} spacing={2}>
        <Grid item sm={2} xs={12}>
          <div className={classes.title}>
            {isSmall ? (
              <div className={classes.headerForMobile} ref={currentElement}>
                <LineTitle title="Portfolio" />
                <PageTitle title="My Projects" />
              </div>
            ) : (
              <Typography
                component="div"
                className={classes.title__content}
                ref={currentElement}
                // ref={reference}
              >
                {result}
              </Typography>
            )}
          </div>
        </Grid>
        <Grid
          item
          sm={10}
          xs={12}
          container
          alignItems="center"
          justify="center"
        >
          <Grid container className={classes.content} spacing={2}>
            {projectsData.map((project) => (
              <Grid
                onClick={() => handleClick(project.images ?? [])}
                key={project.id}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  background={project.background}
                  images={project.images}
                  frameworks={project.frameworks}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {isOpen && (
        <Lightbox
          // reactModalStyle={{ zIndex: 100 }}
          discourageDownloads
          animationOnKeyInput
          mainSrc={images[photoIndex] ?? ""}
          nextSrc={images[(photoIndex + 1) % images.length] ?? ""}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length] ?? ""
          }
          onCloseRequest={() => {
            setPhotoIndex(0)
            setIsOpen(false)
          }}
          onMovePrevRequest={() =>
            setPhotoIndex((prev) => (prev + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((prev) => (prev + 1) % images.length)
          }
        />
      )}
    </div>
  )
}
