function AttendanceButtons({ onCheckIn, onCheckOut }) {
  return (
    <div className="attendance-buttons">
      <button className="checkin-btn" onClick={onCheckIn}>Check In</button>
      <button className="checkout-btn" onClick={onCheckOut}>Check Out</button>
    </div>
  );
}

export default AttendanceButtons;
