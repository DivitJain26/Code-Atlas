import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// Pages
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./components/Dashboard";

import Experiments from "./Pages/Experiments";
import ExperimentPage from "./Pages/ExperimentPage";
import Compiler from "./Pages/Compiler";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= MAIN APP ================= */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ================= DSA FLOW (IMPORTANT) ================= */}
        
        {/* List of problems/topics */}
        <Route path="/experiments" element={<Experiments />} />

        {/* Problem description page (LeetCode-style) */}
        <Route path="/experiment/:id" element={<ExperimentPage />} />

        {/* Compiler MUST always receive problem id */}
        <Route path="/compiler/:id" element={<Compiler />} />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);