import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersApiSlice';
import NewNoteForm from './NewNoteForm';

const NewNote = () => {
  const users = useSelector(selectAllUsers);

  let content = <></>;

  if (users.length) {
    content = <NewNoteForm users={users} />;
  } else {
    content = <p>Currently Not Available</p>;
  }

  return content;
};

export default NewNote;
