// components/shared/navbar.tsx
export default function Navbar() {
  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', background: '#fff', borderBottom: '1px solid #eee' }}>
      <h1>TOUCH</h1>
      <button>Login</button>
    </nav>
  );
}