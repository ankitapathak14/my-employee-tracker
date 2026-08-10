import { dummyEmployees } from "../data";
import { Navigate } from "react-router-dom"; // ✅ NEW: import Navigate

function History({ employeeId }) {
  // ✅ Guard: if no employeeId, redirect to login
  if (!employeeId) {
    return <Navigate to="/login" />;
  }

  const records = dummyEmployees[employeeId] || []; // ✅ safe lookup

  return (
    <div className="history">
      <h1>History</h1>
      <div className="history-card">
        <h2>Attendance History</h2>
        <table className="history-table">
          <thead>
            <tr><th>Date</th><th>Check In</th><th>Check Out</th></tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td>{r.date}</td>
                <td>{r.checkIn}</td>
                <td>{r.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
