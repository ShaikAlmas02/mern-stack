import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Zomato App</h2>
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#ff5733",
    color: "white",
  },
  logo: { fontSize: "22px", fontWeight: "bold" },
  navLinks: { display: "flex", gap: "20px" },
  link: { color: "white", textDecoration: "none", fontSize: "16px" },
};

export default Navbar;



