import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ padding: 12 }}>
        <Link to="/">Home</Link>
      </nav>
      <main style={{ padding: 12 }}>
        <Outlet />
      </main>
    </div>
  );
}
