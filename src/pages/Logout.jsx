import React from "react";   
import { useNavigate } from "react-router-dom"; // ✅ only useNavigate comes from react-router-dom

function Logout({ setIsLoggedIn, setEmployeeId }) {
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    setIsLoggedIn(false);   // clear login state
    setEmployeeId(null);    // clear employeeId
    localStorage.removeItem("isLoggedIn"); // ✅ clear login flag
    localStorage.removeItem("employeeId"); // ✅ clear employeeId
    localStorage.removeItem("role");       // ✅ NEW: clear role too
    navigate("/login");     // redirect to login
  };

  const handleCancel = () => {
    navigate("/dashboard"); // go back if user cancels
  };

  return (
    <div className="logout">
      <h1>Logout</h1>
      <div className="logout-card">
        <p>Are you sure you want to log out?</p>
        <button className="logout-button" onClick={handleConfirmLogout}>
          Yes, Logout
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Logout;
