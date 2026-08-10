function formatTime(date) {
  return date
    ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "--:--";
}

function calculateWorkingHours(checkIn, checkOut) {
  if (!checkIn || !checkOut) return "----";
  const diffMs = checkOut - checkIn; // difference in ms
  const diffSec = Math.floor(diffMs / 1000);
  const hrs = Math.floor(diffSec / 3600);
  const mins = Math.floor((diffSec % 3600) / 60);
  const secs = diffSec % 60;
  return `${hrs}h ${mins}m ${secs}s`;
}

function AttendanceCard({ checkInTime, checkOutTime }) {
  return (
    <div className="attendance-card">
      <h2>Today's Attendance</h2>
      <div className="attendance-row">
        <span>Check In:</span>
        <span>{formatTime(checkInTime)}</span>
      </div>
      <div className="attendance-row">
        <span>Check Out:</span>
        <span>{formatTime(checkOutTime)}</span>
      </div>
      <div className="attendance-row">
        <span>Working Hours:</span>
        <span>{calculateWorkingHours(checkInTime, checkOutTime)}</span>
      </div>
    </div>
  );
}

export default AttendanceCard;
