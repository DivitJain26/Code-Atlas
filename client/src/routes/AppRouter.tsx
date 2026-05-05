import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Dashboard from "../components/Dashboard";

import Experiments from "../Pages/Experiments";
import ExperimentPage from "../Pages/ExperimentPage";
import Compiler from "../Pages/Compiler";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>

        {/* ===== PUBLIC ROUTES (only for unauthenticated users) ===== */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* ===== PROTECTED ROUTES (require login) ===== */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/experiment/:id" element={<ExperimentPage />} />
          <Route path="/compiler/:id" element={<Compiler />} />
        </Route>

        {/* ===== PUBLIC (always accessible) ===== */}
        <Route path="/" element={<Landing />} />

        {/* ===== FALLBACK ===== */}
        <Route path="*" element={<Landing />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;