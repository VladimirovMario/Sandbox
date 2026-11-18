import { useEffect, useState } from 'react';
import useAxiosPrivate from '../auth/hooks/useAxiosPrivate';
import { apiEndpoints } from '../constants/apiEndpoints';
import User from './User';
import { useLocation, useNavigate } from 'react-router-dom';

function Users() {
  const axiosPrivate = useAxiosPrivate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const timeoutID = setTimeout(() => {
      getAllUsers();
    }, 1200);

    async function getAllUsers() {
      try {
        const response = await axiosPrivate.get(apiEndpoints.USERS, {
          signal: controller.signal,
        });
        setUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        navigate('/login', { state: { from: location }, replace: true });
      }
    }

    return () => {
      controller.abort();
      clearTimeout(timeoutID);
    };
  }, [axiosPrivate, location, navigate]);

  let content = <></>;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (users.length > 0) {
    content = (
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {users.map((user, i) => {
          return <User key={i} user={user} />;
        })}
      </ul>
    );
  } else if (users.length === 0 && isLoading === false) {
    content = <p>No users to display</p>;
  }

  return <article>{content}</article>;
}

export default Users;
