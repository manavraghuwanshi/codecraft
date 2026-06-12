import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Welcome to your dashboard.
      </p>

      <Link to="/">
        Back to Home
      </Link>
    </div>
  );
}