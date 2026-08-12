import { UserIcon, ClockIcon } from '@heroicons/react/24/solid';

function DashboardCard() {
  return (
    <div className="dashboard-card">
      <UserIcon className="icon" />
      <h2>Employee Profile</h2>
      <p>View and edit details</p>
    </div>
  );
}

export default DashboardCard;
