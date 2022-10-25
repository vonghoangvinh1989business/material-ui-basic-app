import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import JobDetailsDialog from "./components/JobDetailsDialog";
import LoginDialog from "./components/LoginDialog";
import "./App.css";
import AuthContext from "./auth/AuthContext";

function App() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="jobs/:id" element={<JobDetailsDialog />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        {auth.user ? (
          <Route path="/job/:id" element={<JobDetailsDialog />} />
        ) : (
          <Route path="/job/:id" element={<LoginDialog />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
