import { createMuiTheme } from "@material-ui/core/styles"

export const baseTheme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    body2: {
      // fontFamily: "Montserrat, sans-serif",
      // fontFamily: "Muli, sans-serif",
      fontSize: "50px",
      fontWeight: 900,
      lineHeight: "70px",
      letterSpacing: "0px",
    },
    h1: {
      lineHeight: "99px",
      fontSize: "90px",
      fontFamily: "Playfair Display, serif",
    },
    h2: {
      lineHeight: "60px",
      fontFamily: "Playfair Display, serif",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 700,
      },
    },
    MuiChip: {
      root: {
        fontWeight: 700,
      },
    },
  },
})
