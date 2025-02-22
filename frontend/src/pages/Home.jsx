import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Zomato Clone</h1>
      <p style={styles.subtitle}>Find the best restaurants near you!</p>

    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f8f9fa",
    backgroundImage: "url('frontend/src/pages/download.jpeg')",
    height: "100vh",
  },
  title: { fontSize: "28px", color: "#ff5733" },
  subtitle: { fontSize: "18px", marginBottom: "20px" },
  linkContainer: { display: "flex", justifyContent: "center", gap: "20px" },
  button: {
    padding: "10px 20px",
    textDecoration: "none",
    backgroundColor: "#ff5733",
    color: "white",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

export default Home;





