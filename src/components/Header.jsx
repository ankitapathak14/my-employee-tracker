import img from "../assets/logo.png";

function Header({ setIsSidebarOpen, isSidebarOpen }) {
  return (
    <header className="header">
      {/* Hamburger only shows when sidebar is closed */}
      {!isSidebarOpen && (
        <button 
          className="sidebar-toggle" 
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Title in the center */}
      <div className="title">
        <h1>Employee Attendance</h1>
        <p>Attendance Tracking System</p>
      </div>

      {/* Logo on the right */}
      <div className="logo">
        <img
          className="logo-img"
          src={img}
          alt="Company Logo"
        />
      </div>
    </header>
  );
}

export default Header;
