import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import MessageScan from "./pages/MessageScan/MessageScan";
import URLScan from "./pages/URLScan/URLScan";
import ImageScan from "./pages/ImageScan/ImageScan";
import VoiceScan from "./pages/VoiceScan/VoiceScan";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/message"
        element={
          <ProtectedRoute>
            <MessageScan />
          </ProtectedRoute>
        }
      />

      <Route
        path="/url"
        element={
          <ProtectedRoute>
            <URLScan />
          </ProtectedRoute>
        }
      />

      <Route
        path="/image"
        element={
          <ProtectedRoute>
            <ImageScan />
          </ProtectedRoute>
        }
      />

      <Route
        path="/voice"
        element={
          <ProtectedRoute>
            <VoiceScan />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Unknown Route */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default App;