import React from "react";
import Stack from "@mui/material/Stack";
import SearchJobBar from "../components/SearchJobBar";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function LayoutPage() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack sx={{ minHeight: "100vh" }}>
        <SearchJobBar />
        <Outlet />
      </Stack>
    </ThemeProvider>
  );
}

export default LayoutPage;
