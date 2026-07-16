// components/shared/navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', background: '#fff', borderBottom: '1px solid #eee' }}>
      <h1>TOUCH</h1>
        <Link to="/home">
        <button>Login</button>
      </Link>
    </nav>
  );
}