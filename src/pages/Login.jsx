import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProfiles } from "../data";

function Login({ setIsLoggedIn, setEmployeeId }) {
  const [username, setUsername] = useState(""); // employeeId typed here
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const profile = dummyProfiles[username]; // ✅ lookup by employeeId
    if (profile && profile.password === password) {
      alert("Login Successful!");
      setIsLoggedIn(true);
      setEmployeeId(username);   // ✅ store employeeId in App
      localStorage.setItem("isLoggedIn", "true"); // ✅ persist login
      localStorage.setItem("employeeId", username); // ✅ persist employeeId
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
 <div className="login-container">
    <div className="login-card">
      <h1>Login Page</h1>
      <p><strong>Please enter your Employee ID and password</strong></p>
      <form onSubmit={handleLogin}>
        <div>
          <label>Employee ID: </label>
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
      </form>
    </div>
  </div>
  );
}

export default Login;
