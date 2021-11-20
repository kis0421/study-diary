import React from "react";
import { HashRouter } from "react-router-dom"
import useStore from "./useStore"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import Routes from "./Routes"
import NavigationMenu from "./components/NavigationMenu";
import Setting from "./components/Setting";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E33E7F"
    }
  }
});

const App = () => {
  return (
    <div className="app">
      <Routes />
    </div>)
}

export default () => {
  return <>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </>
};