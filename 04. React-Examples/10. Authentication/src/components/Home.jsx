import { Link } from 'react-router-dom';
import Logout from './Logout';

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/editor">Editor</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/lounge">Lounge</Link>
        </li>
        <li>
          <Link to="/linkPage">Link Page</Link>
        </li>
      </ul>
      <Logout />
    </section>
  );
}

export default Home;
