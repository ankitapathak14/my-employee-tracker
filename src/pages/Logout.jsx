import React, { useEffect } from "react";   // ✅ FIX: import useEffect from react
import { useNavigate } from "react-router-dom"; // ✅ only useNavigate comes from react-router-dom

function Logout({ setIsLoggedIn, setEmployeeId }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(false);   // clear login state
    setEmployeeId(null);    // clear employeeId
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("employeeId");
    navigate("/login");     // redirect to login
  }, []);

  return <h1>Logging out...</h1>;
}

export default Logout;
