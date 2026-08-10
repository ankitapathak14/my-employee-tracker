import EmployeeCard from "../components/EmployeeCard";
import { QRCodeCanvas } from "qrcode.react";
import { Navigate } from "react-router-dom"; // ✅ NEW: import Navigate for redirect

function Profile({ employeeId }) {
  //const appUrl = "http://10.11.84.145:5173/login"; // ✅ QR always points to login
 
  const appUrl = "https://192.168.0.194:5173//login"; // ✅ QR always points to login

  // ✅ Guard: if no employeeId, redirect to login
  if (!employeeId) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <EmployeeCard employeeId={employeeId} /> {/* ✅ safe: only renders if employeeId exists */}
      <p>Scan this QR to open the app:</p>
      <div className="qr-container">
        <QRCodeCanvas value={appUrl} size={200} fgColor="#000000" bgColor="#ffffff" level="H" />
      </div>
    </div>
  );
}  

export default Profile;
