import { Link } from "react-router-dom";
import {
  HomeIcon,
  ClockIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon
} from "@heroicons/react/24/solid";
import DarkModeToggle from "./DarkModeToggle"; // ✅ NEW
import "./Sidebar.css";

function Sidebar({ setIsSidebarOpen }) {
  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
        <button 
          className="close-btn" 
          onClick={() => setIsSidebarOpen(false)}
        >
          ✖
        </button>
      </div>

      <Link to="/dashboard"><HomeIcon className="sidebar-icon" /> Dashboard</Link>
      <Link to="/history"><ClockIcon className="sidebar-icon" /> History</Link>
      <Link to="/profile"><UserIcon className="sidebar-icon" /> Profile</Link>
      <Link to="/logout"><ArrowRightOnRectangleIcon className="sidebar-icon" /> Logout</Link>

      {/* ✅ Dark Mode Toggle
      <DarkModeToggle /> */}
    </div>
  );
}

export default Sidebar;
