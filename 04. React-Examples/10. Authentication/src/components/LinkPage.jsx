import { Link } from 'react-router-dom';

function LinkPage() {
  return (
    <section>
      <h1>Links</h1>
      <h2>Public</h2>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <h2>Private</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/editor">Editor</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </section>
  );
}

export default LinkPage;
