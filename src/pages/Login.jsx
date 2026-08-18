import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProfiles } from "../data";

function Login({ setIsLoggedIn, setEmployeeId }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const profile = dummyProfiles[username];
    if (profile && profile.password === password) {
      alert("Login Successful!");
      setIsLoggedIn(true);
      setEmployeeId(username);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("employeeId", username);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials or role mismatch");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login Page</h1>
          <>
            <p><strong>Login</strong></p>
            <form onSubmit={handleLogin}>
              <div>
                <label>ID: </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label>Password: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="login-button" type="submit">Login</button>
              <button className="back-button" onClick={() => setSelectedRole(null)}>Back</button>
            </form>
          </>
      </div>
    </div>
  );
}

export default Login;
