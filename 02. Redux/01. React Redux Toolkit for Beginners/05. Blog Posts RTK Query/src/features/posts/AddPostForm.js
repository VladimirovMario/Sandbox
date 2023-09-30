import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  // postAdded,
  addNewPost,
} from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

export default function AddPostForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select all users from the Redux store
  const users = useSelector(selectAllUsers);

  // State to store form input values
  const [values, setValues] = useState({ title: '', content: '', userId: '' });
  const { title, content, userId } = values;
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  // Function to handle input changes
  function handleChange(e) {
    // Update the specific field (title, content, or userId) in the 'values' state
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  // Determine if the form can be saved based on input values and request status
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  // Function to handle form submission
  function handlePostSave(e) {
    e.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus('pending');
        // Dispatch the 'postAdded' action with title, content, and userId as parameters
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        // Reset form fields to empty strings
        setValues(
          Object.fromEntries(Object.keys(values).map((key) => [key, '']))
        );
        navigate('/');
      } catch (error) {
        console.log('Failed to save the post', error.message);
      }
      setAddRequestStatus('idle');
    }
  }

  // Create options for the user dropdown menu
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handlePostSave}>
        {/* Input for Post Title */}
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        {/* Dropdown menu for choosing the author */}
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="userId"
          value={values.userId}
          onChange={handleChange}
        >
          <option value=""></option> {/* Empty option for no author selected */}
          {usersOptions} {/* Populate user options */}
        </select>
        {/* Input for Post Content */}
        <label htmlFor="content">Post Content:</label>
        <textarea
          type="text"
          id="content"
          name="content"
          value={values.content}
          onChange={handleChange}
        />
        {/* Submit Button */}
        <button disabled={!canSave}>Save Post</button>{' '}
        {/* Disable if canSave is false */}
      </form>
    </section>
  );
}
