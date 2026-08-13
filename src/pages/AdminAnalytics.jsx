// src/pages/AdminAnalytics.jsx
import React from "react";
import { dummyEmployees, dummyProfiles } from "../data";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

// Parse "09:10 AM" into Date
function parseTime(timeStr) {
  if (!timeStr) return null;
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (modifier === "PM" && hours < 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

// Calculate total working hours
function calculateHours(records) {
  return records.reduce((total, r) => {
    const inTime = parseTime(r.checkIn);
    const outTime = parseTime(r.checkOut);
    if (!inTime || !outTime) return total;
    const diff = (outTime - inTime) / (1000 * 60 * 60);
    return total + diff;
  }, 0);
}

function AdminAnalytics() {
  const data = Object.keys(dummyEmployees).map((id) => {
    const profile = dummyProfiles[id];
    const records = dummyEmployees[id] || [];
    return {
      name: profile.name,
      department: profile.department,
      totalHours: parseFloat(calculateHours(records).toFixed(1)),
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

          {/* ✅ Two separate Y axes */}
          <YAxis yAxisId="left" label={{ value: "Hours", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Days", angle: -90, position: "insideRight" }} />

          <Tooltip
            formatter={(value, name) => {
              if (name === "Total Hours Worked") return `${value} hrs`;
              if (name === "Days Present") return `${value} days`;
              return value;
            }}
          />
          <Legend />

          {/* ✅ Assign bars to different axes */}
          <Bar yAxisId="left" dataKey="totalHours" fill="#2563eb" name="Total Hours Worked" />
          <Bar yAxisId="right" dataKey="daysPresent" fill="#22c55e" name="Days Present" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminAnalytics;
