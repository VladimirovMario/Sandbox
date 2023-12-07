import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Welcome = () => {
  // Retrieve user information and roles using the useAuth hook
  const { username, isManager, isAdmin } = useAuth();

  const date = new Date();
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  // Get the current date and format it in British English style
  const options = {
    dateStyle: 'full',
    timeStyle: 'long',
  };

  const today = new Intl.DateTimeFormat('en-GB', options).format(date);
  // Tuesday, 21 November 2023 at 11:32:23 GMT+2

  // Content to be rendered in the Welcome component
  const content = (
    <section className="welcome">
      <p>{today}</p>
      <h1>Welcome {username}</h1>
      <p>
        <Link to="/dash/notes">View Tech Notes</Link>
      </p>
      <p>
        <Link to="/dash/notes/new">Add New Tech Notes</Link>
      </p>
      {(isAdmin || isManager) && (
        <p>
          <Link to="/dash/users">View User Settings</Link>
        </p>
      )}
      {(isAdmin || isManager) && (
        <p>
          <Link to="/dash/users/new">Add New User</Link>
        </p>
      )}
    </section>
  );
  return content;
};

export default Welcome;
