import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import History from "./pages/History.jsx";
import Logout from "./pages/Logout.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ✅ Restore login state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // ✅ Restore employeeId from localStorage
  const [employeeId, setEmployeeId] = useState(() => {
    return localStorage.getItem("employeeId") || null;
  });

  // ✅ Keep localStorage in sync + force logout if employeeId missing
  useEffect(() => {
    if (isLoggedIn && !employeeId) {
      // 🚨 NEW FIX: if logged in but employeeId is null, force logout
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
            {/* ✅ Root route: login if not logged in */}
            <Route
              path="/"
              element={
                isLoggedIn 
                  ? <Dashboard employeeId={employeeId} /> 
                  : <Login setIsLoggedIn={setIsLoggedIn} setEmployeeId={setEmployeeId} />
              }
            />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setEmployeeId={setEmployeeId} />} />
            
            {/* ✅ Protect all routes */}
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <Dashboard employeeId={employeeId} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/history" 
              element={isLoggedIn ? <History employeeId={employeeId} /> : <Navigate to="/login" />} 
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
