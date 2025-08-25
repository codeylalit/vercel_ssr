import HelloSSR from "../components/HelloSSR";
import Link from "next/link";

export default function Home({ time }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <nav style={{ padding: "10px", background: "#f3f3f3" }}>
        <Link href="/">Home</Link> | <Link href="/login">Login</Link>
      </nav>
      <h1>Next.js + React (SSR)</h1>
      <HelloSSR message={`Rendered at ${time}`} />
    </div>
  );
}

// SSR function - runs on each request
export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toISOString()
    }
  };
}