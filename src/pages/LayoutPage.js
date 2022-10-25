import React from "react";
import Stack from "@mui/material/Stack";
import SearchJobBar from "../components/SearchJobBar";
import { Outlet } from "react-router-dom";

function LayoutPage() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <SearchJobBar />
      <Outlet />
    </Stack>
  );
}

export default LayoutPage;
