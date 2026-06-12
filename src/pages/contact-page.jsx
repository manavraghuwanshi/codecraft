import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>

      <p>Email: lalitraghu@gmail.com</p>

      <p>Phone: +91 7692877538</p>

      <Link to="/">
        Back to Home
      </Link>
    </div>
  );
}