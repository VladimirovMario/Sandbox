import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { store } from '../../app/store';
import { notesApiSlice } from '../notes/notesApiSlice';
import { usersApiSlice } from '../users/usersApiSlice';

const Prefetch = () => {
  useEffect(() => {
    // console.log('subscribing');

    // https://redux-toolkit.js.org/rtk-query/api/created-api/endpoints#description
    // Add a subscription
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return () => {
      // console.log('unsubscribe');
      // The `unsubscribe` callback to be called in the `useEffect` cleanup step
      notes.unsubscribe();
      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default Prefetch;

/*
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetNotesQuery } from '../notes/notesApiSlice';
import { useGetUsersQuery } from '../users/usersApiSlice';

const Prefetch = () => {
  const { refetch: refetchUsers } = useGetUsersQuery();
  const { refetch: refetchNotes } = useGetNotesQuery();

  useEffect(() => {
    console.log('subscribing');
    // Manually refetch data when the component mounts
    refetchUsers();
    refetchNotes();

    return () => {
      console.log('unsubscribe');
      // No need to unsubscribe, as RTK Query handles caching and invalidation
    };
  }, [refetchUsers, refetchNotes]);

  return <Outlet />;
};

export default Prefetch;
*/
