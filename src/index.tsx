import "aos/dist/aos.css"
import { init } from "emailjs-com"
import React from "react"
import ReactDOM from "react-dom"
import "react-image-lightbox/style.css"
import App from "./app/App"
import "./index.css"
// import Firebase, { FirebaseContext } from "firebase"

process.env.REACT_APP_MAIL_USER_ID && init(process.env.REACT_APP_MAIL_USER_ID)

ReactDOM.render(
  // <React.StrictMode>
  // <FirebaseContext.Provider value={new Firebase()}>
  <App />,
  // </FirebaseContext.Provider>,

  // </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
