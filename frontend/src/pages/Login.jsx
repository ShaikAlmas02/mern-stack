import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful! (Frontend only)");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
          
          <label style={styles.label}>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required style={styles.input} />
          
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f8f9fa" },
  card: { width: "350px", padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" },
  title: { fontSize: "22px", marginBottom: "15px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center" },
  label: { fontWeight: "bold", marginBottom: "5px", alignSelf: "flex-start" },
  input: { width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" },
  button: { width: "100%", padding: "10px", backgroundColor: "#ff5733", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default Login;



