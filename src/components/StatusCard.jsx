function StatusCard({ status }) {
  const isCheckedIn = status === "Checked In";
  const isCheckedOut = status === "Checked Out";

  return (
    <div className="status-card">
      <h2>Today's Status</h2>
      <div className="status">
        <span
          className="status-dot"
          style={{ backgroundColor: isCheckedIn || isCheckedOut ? "green" : "red" }}
        ></span>
        <span>{status}</span>
      </div>
    </div>
  );
}

export default StatusCard;
