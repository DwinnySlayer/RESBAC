import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeTab from "../pages/Home/Home";
import RescueTeams from "../pages/RescueTeams/RescueTeams";
// ... other imports

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth routes */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register-step1" element={<RegisterStep1 />} /> */}
      {/* Main app layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeTab />} />
        <Route path="/rescue-teams" element={<RescueTeams />} />
        {/* ...other tabs */}
      </Route>
    </Routes>
  );
}
