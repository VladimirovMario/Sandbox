import { Link } from 'react-router-dom';
import Users from './Users';

function Admin() {
  return (
    <section>
      <h1>Admins Page</h1>
      <Users />
      <Link to="/">Home</Link>
    </section>
  );
}

export default Admin;
