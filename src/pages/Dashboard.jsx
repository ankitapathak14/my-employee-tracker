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
  const [location,setLocation] = useState(null); //New addition for adding location

  const handleCheckIn = () => {
    const now = new Date();
    setStatus("Checked In");
    setCheckInTime(now);

    //getting geolocation
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        const { latitude, longitude } = pos.coords;
        setLocation(`Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`);

      },
      (err)=>{console.error(err);
        setLocation("Location unavailable");
      }
     );
    }
    else{
      setLocation("Geolocation not supported");
    }
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
      <AttendanceCard checkInTime={checkInTime} checkOutTime={checkOutTime} 
      location={location}/>

    </div>
  );
}

export default EmployeeDashboard;
