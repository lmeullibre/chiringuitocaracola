import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { theme } from "./theme/index";
import { createEmotionCache } from "./utils/create-emotion-cache";
import { ThemeProvider } from "@mui/material/";
import { CssBaseline, Typography } from "@mui/material";
import Page from "./Page";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Comidas from "./Comidas";

const clientSideEmotionCache = createEmotionCache();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page></Page>}/>
          <Route path="comidas" element={<Comidas></Comidas>}/>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
