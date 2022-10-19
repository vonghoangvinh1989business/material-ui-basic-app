import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import SearchJobBar from "./components/SearchJobBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const LoginModalContext = createContext();

function App() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LoginModalContext.Provider
          value={{
            openLoginModal,
            handleOpenLoginModal,
            handleCloseLoginModal,
          }}
        >
          <SearchJobBar />
        </LoginModalContext.Provider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
