import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Experiments from "./Pages/Experiments";
import ExperimentPage from "./Pages/ExperimentPage";
import Compiler from "./Pages/Compiler";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Dashboard />} />

        {/* List of problems */}
        <Route path="/experiments" element={<Experiments />} />

        {/* Problem Description Page */}
        <Route path="/experiment/:id" element={<ExperimentPage />} />

        {/* Compiler Page (CONNECTED TO PROBLEM) */}
        <Route path="/compiler/:id" element={<Compiler />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;