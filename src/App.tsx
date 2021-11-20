import React from "react";
import useStore from "./useStore"

import { ThemeProvider, createTheme } from "@mui/material/styles"
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
  return <div className="app">
    <section style={{ height: "2000px" }}>
    <Setting/>
    </section>
    <NavigationMenu />
  </div>
}

export default () => {
  return <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
};