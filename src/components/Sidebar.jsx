import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ setIsSidebarOpen }) {
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
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/history">History</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default Sidebar;
