export default function HelloSSR({ message }) {
  return (
    <div style={{ padding: "20px", background: "#f3f3f3", marginTop: "20px" }}>
      <h2>Hello from SSR!</h2>
      <p>{message}</p>
    </div>
  );
}