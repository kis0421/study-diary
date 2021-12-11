import React from "react";
import { HashRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider as StoreProvider } from "./context/StoreContext";
import { Provider as UIProvider } from "./context/UIContext"

import Routes from "./Routes"

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
        <UIProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </UIProvider>
      </ThemeProvider>
    </HashRouter>
  </>
};
