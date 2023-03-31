import React, {useState, useEffect} from "react"
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./navigation/RouterConfig";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./theme";
import { createTheme } from "@mui/material/styles";

const App = () => {  
  return (
    <ThemeProvider theme={createTheme(getTheme())}>
    <BrowserRouter>
        <CssBaseline>
          <AppRouter />
        </CssBaseline>
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default (App);
