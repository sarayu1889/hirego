import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/candidate"
          element={
            <ProtectedRoute role="candidate">
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employer"
          element={
            <ProtectedRoute role="employer">
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
