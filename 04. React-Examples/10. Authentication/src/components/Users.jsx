import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { apiEndpoints } from '../constants/apiEndpoints';
import User from './User';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getAllUsers();

    async function getAllUsers() {
      try {
        const response = await axios.get(apiEndpoints.USERS, {
          signal: controller.signal,
        });
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    return () => controller.abort();
  }, []);

  const content =
    users.length > 0 ? (
      <ul>
        {users.map((user, i) => {
          return <User key={i} user={user} />;
        })}
      </ul>
    ) : (
      <p>No users to display</p>
    );

  return <article>{content}</article>;
}

export default Users;
