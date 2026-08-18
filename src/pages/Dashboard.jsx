import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard.jsx";
import StatusCard from "../components/StatusCard.jsx";
import AttendanceButtons from "../components/AttendanceButtons.jsx";
import AttendanceCard from "../components/AttendanceCard.jsx";
import { dummyEmployees } from "../data";

function EmployeeDashboard({ employeeId }) {
  const [status, setStatus] = useState("Not Checked In");
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  const handleCheckIn = () => {
    const now = new Date();
    setStatus("Checked In");
    setCheckInTime(now);
  };

  const handleCheckOut = () => {
    const now = new Date();
    setStatus("Checked Out");
    setCheckOutTime(now);
  };

  const records = dummyEmployees[employeeId] || [];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <StatusCard status={status} />
      <AttendanceButtons onCheckIn={handleCheckIn} onCheckOut={handleCheckOut} />
      <AttendanceCard checkInTime={checkInTime} checkOutTime={checkOutTime} />

    </div>
  );
}

export default EmployeeDashboard;
