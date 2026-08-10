import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard.jsx";
import StatusCard from "../components/StatusCard.jsx";
import AttendanceButtons from "../components/AttendanceButtons.jsx";
import AttendanceCard from "../components/AttendanceCard.jsx";

function Dashboard() {
  const [status, setStatus] = useState("Not Checked In");
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

// new Data() -> Creates a Date object representing the current date and time on your computer.
//.toLocaleTimeString() -> Converts that Date object into a human‑readable time string. It uses your system’s locale settings (language + region) to decide the format but as strings but we want to store the actual Date object for calculations, we will store the Date object instead of the string representation.

  const handleCheckIn = () => {
  const now = new Date();
  setStatus("Checked In");
  setCheckInTime(now);   // store Date object
};

const handleCheckOut = () => {
  const now = new Date();
  setStatus("Checked Out");
  setCheckOutTime(now);  // store Date object
};


  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to the Employee Attendance Tracker Dashboard!</p>

      {/* Status Card */}
      <StatusCard status={status} />

      {/* Buttons */}
      <AttendanceButtons onCheckIn={handleCheckIn} onCheckOut={handleCheckOut} />

      {/* Attendance Card */}
      <AttendanceCard checkInTime={checkInTime} checkOutTime={checkOutTime} />
    </div>
  );
}

export default Dashboard;
