import { dummyProfiles } from "../data";

function EmployeeCard({ employeeId }) {
  // ✅ Guard: if no employeeId, show message instead of crashing
  if (!employeeId) return <p>No employee selected</p>;

  const profile = dummyProfiles[employeeId];

  // ✅ Guard: if profile not found, show message
  if (!profile) return <p>No profile found</p>;

  return (
    <div className="employee-card">
      <h2>Employee Details</h2>
      <div className="employee-info">
        <p><strong>Employee ID:</strong> {employeeId}</p>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Role:</strong> {profile.role}</p>
        <p><strong>Department:</strong> {profile.department}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
