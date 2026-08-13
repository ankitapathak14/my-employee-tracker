// src/pages/AdminAnalytics.jsx
import React from "react";
import { dummyEmployees, dummyProfiles } from "../data";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

// Helper: calculate total working hours per employee
function calculateHours(records) {
  return records.reduce((total, r) => {
    const [inH, inM] = r.checkIn.split(":");
    const [outH, outM] = r.checkOut.split(":");
    const inTime = new Date(`1970-01-01T${inH}:${inM}:00`);
    const outTime = new Date(`1970-01-01T${outH}:${outM}:00`);
    const diff = (outTime - inTime) / (1000 * 60 * 60); // hours
    return total + diff;
  }, 0);
}

function AdminAnalytics() {
  // Prepare chart data
  const data = Object.keys(dummyEmployees).map((id) => {
    const profile = dummyProfiles[id];
    const records = dummyEmployees[id] || [];
    return {
      name: profile.name,
      department: profile.department,
      totalHours: calculateHours(records).toFixed(1),
      daysPresent: records.length
    };
  });

  return (
    <div className="admindashboard">
      <h1>Admin Analytics Dashboard</h1>
      <p>Attendance insights for all employees</p>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalHours" fill="#2563eb" name="Total Hours Worked" />
          <Bar dataKey="daysPresent" fill="#22c55e" name="Days Present" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminAnalytics;
