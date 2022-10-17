import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchJobBar from "./components/SearchJobBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchJobBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
