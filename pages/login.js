import Link from "next/link";

export default function Login() {
  return (
    <div style={{
      maxWidth: "400px",
      margin: "100px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link href="/">⬅ Back</Link>
      </nav>
      <h2 style={{ textAlign: "center", color: "#f97316" }}>Login</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password</label>
          <input type="password" placeholder="••••••" required
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }} />
        </div>
        <button type="submit" style={{
          width: "100%",
          padding: "10px",
          background: "#f97316",
          color: "white",
          border: "none",
          borderRadius: "4px"
        }}>
          Login
        </button>
      </form>
    </div>
  );
}