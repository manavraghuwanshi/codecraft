import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default Navbar;