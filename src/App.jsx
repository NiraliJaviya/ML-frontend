import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/Layout/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Prediction from "./pages/Prediction/Prediction";
import Result from "./pages/Result/Result";
import Analytics from "./pages/Analytics/Analytics";
import History from "./pages/History/History";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/predict" element={<Prediction />} />
        <Route path="/result" element={<Result />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
