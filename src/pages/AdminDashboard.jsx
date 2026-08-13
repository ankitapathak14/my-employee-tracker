import React from "react";
import { dummyProfiles, dummyEmployees } from "../data";

function AdminDashboard() {
  return (
    <div className="admindashboard">
      <h1>Admin Dashboard</h1>
      <p>Overview of all employees</p>

      {Object.keys(dummyProfiles).map((id) => {
        if (dummyProfiles[id].role === "Employee") {
          return (
            <div key={id} className="employee-section">
              <h3>{dummyProfiles[id].name} ({id})</h3>
              <p>Department: {dummyProfiles[id].department}</p>
              <ul>
                {(dummyEmployees[id] || []).map((entry, index) => (
                  <ul key={index}>
                    {entry.date} - In: {entry.checkIn}, Out: {entry.checkOut}
                  </ul>
                ))}
              </ul>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default AdminDashboard;
