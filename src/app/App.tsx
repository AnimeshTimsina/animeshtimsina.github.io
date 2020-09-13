import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import { blue, orange } from "@material-ui/core/colors"
import AOS from "aos"
import React, { useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotFoundPage from "../components/404"
import CustomDrawer from "../components/drawer"
import { Main } from "../components/main/main.view"
import { baseTheme } from "./App.styles"
import { AppProvider } from "./context"

let theme = createMuiTheme({
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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    })
    AOS.refresh()
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <AppProvider>
        <CustomDrawer />
        <Main />
      </AppProvider>
    </MuiThemeProvider>

    // <div style={{ background: "black", color: "white" }}>
    //   Hello World
    //   <ParticlesBg color="#ff0000" num={40} type="cobweb" bg={true} />
    // </div>
  )
}
export default App
