import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { blue, orange, teal } from "@material-ui/core/colors"
import AOS from "aos"
import React, { useEffect, useState } from "react"
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import NotFoundPage from "../components/404"
import CustomDrawer from "../components/drawer"
import { Main } from "../components/main/main.view"
import { baseTheme } from "./App.styles"
import { AppProvider } from "./context"

let darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    secondary: {
      main: orange[500],
    },
    primary: {
      main: blue[500],
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
  },
})

let lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "light",
    secondary: {
      main: orange[500],
    },
    primary: {
      main: teal[500],
    },
  },
})

const App = () => {
  let currentMode = localStorage.getItem("darkMode")
  let defaultTheme: boolean =
    currentMode !== null ? JSON.parse(currentMode) : false

  const [darkMode, setDarkMode] = useState<boolean>(defaultTheme)

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    AOS.init({
      duration: 500,
    })
    AOS.refresh()
  }, [])

  return (
    <BrowserRouter basename="/portfolio">
      <MuiThemeProvider theme={darkTheme}>
        <AppProvider>
          <CustomDrawer />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppProvider>
      </MuiThemeProvider>
    </BrowserRouter>
    // <div style={{ background: "black", color: "white" }}>
    //   Hello World
    //   <ParticlesBg color="#ff0000" num={40} type="cobweb" bg={true} />
    // </div>
  )
}
export default App
