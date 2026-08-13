import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import EmployeeDashboard from "./pages/Dashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import History from "./pages/History.jsx";
import Logout from "./pages/Logout.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import AdminAnalytics from "./pages/AdminAnalytics.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [employeeId, setEmployeeId] = useState(() => {
    return localStorage.getItem("employeeId") || null;
  });

  useEffect(() => {
    if (isLoggedIn && !employeeId) {
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
    }

    localStorage.setItem("isLoggedIn", isLoggedIn);
    if (employeeId) {
      localStorage.setItem("employeeId", employeeId);
    } else {
      localStorage.removeItem("employeeId");
    }
  }, [isLoggedIn, employeeId]);

  const role = localStorage.getItem("role");

  return (
    <div className="app-layout">
      {isLoggedIn && (
        <Header 
          setIsSidebarOpen={setIsSidebarOpen} 
          isSidebarOpen={isSidebarOpen} 
        />
      )}

      <div className="main-layout">
        {isLoggedIn && (
          <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
            <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
          </div>
        )}

        <div className="page-content">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn 
                  ? role === "Admin" 
                    ? <AdminDashboard /> 
                    : <EmployeeDashboard employeeId={employeeId} /> 
                  : <Login setIsLoggedIn={setIsLoggedIn} setEmployeeId={setEmployeeId} />
              }
            />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setEmployeeId={setEmployeeId} />} />
            
            <Route 
              path="/dashboard" 
              element={
                isLoggedIn 
                  ? role === "Admin" 
                    ? <AdminDashboard /> 
                    : <EmployeeDashboard employeeId={employeeId} /> 
                  : <Navigate to="/login" />
              } 
            />
            <Route 
              path="/history" 
              element={isLoggedIn ? <History employeeId={employeeId} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/analytics" 
              element={isLoggedIn && role === "Admin" ? <AdminAnalytics /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={isLoggedIn ? <Profile employeeId={employeeId} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/logout" 
              element={isLoggedIn ? <Logout setIsLoggedIn={setIsLoggedIn} setEmployeeId={setEmployeeId} /> : <Navigate to="/login" />} 
            />

          </Routes>
        </div>
      </div>

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
