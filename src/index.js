import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./auth/AuthProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const container = document.querySelector("#root");
const root = createRoot(container);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
