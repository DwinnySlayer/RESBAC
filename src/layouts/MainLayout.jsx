import Sidebar from "../components/SideBar/SideBar/SideBar";
import "./MainLayout.css";
import { Outlet } from "react-router-dom"; // assuming you're using React Router

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* This is where the active tab's page will render */}
      </div>
    </div>
  );
}