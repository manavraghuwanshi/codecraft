import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function HomePage() {
  return (
    <>
    <nav
  className="navbar"
  style={{ backgroundColor: "#e3f2fd" }}
>
  <div className="container">

    <div className="d-flex align-items-center gap-4">
      <Link className="nav-link" to="/dashboard">
        Dashboard
      </Link>

      <Link className="nav-link" to="/about">
        About
      </Link>

      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </div>

  </div>
</nav>
      <div className="container mt-4">
        <h1>Home Page</h1>

        <p>Welcome to our website.</p>

        <p>Use the navigation bar above to explore the application.</p>
      </div>
    </>
  );
}
