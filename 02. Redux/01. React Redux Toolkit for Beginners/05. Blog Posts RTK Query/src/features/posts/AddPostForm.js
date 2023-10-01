import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectAllUsers } from '../users/usersSlice';
import { useNavigate } from 'react-router-dom';
import { useAddNewPostMutation } from './postsSlice';

export default function AddPostForm() {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const users = useSelector(selectAllUsers);

  const navigate = useNavigate();

  const [values, setValues] = useState({ title: '', body: '', userId: '' });
  const { title, body, userId } = values;

  function handleChange(e) {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const canSave = [title, body, userId].every(Boolean) && !isLoading;

  async function handlePostSave(e) {
    e.preventDefault();

    if (canSave) {
      try {
        await addNewPost({ title, body, userId }).unwrap();
        setValues(Object.fromEntries(Object.keys(values).map((k) => [k, ''])));
        navigate('/');
      } catch (error) {
        console.log('Failed to save the post', error);
      }
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
          value={title}
          onChange={handleChange}
        />
        {/* Dropdown menu for choosing the author */}
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="userId"
          value={userId}
          onChange={handleChange}
        >
          <option value=""></option> {/* Empty option for no author selected */}
          {usersOptions} {/* Populate user options */}
        </select>
        {/* Input for Post Content */}
        <label htmlFor="body">Post Content:</label>
        <textarea
          type="text"
          id="body"
          name="body"
          value={body}
          onChange={handleChange}
        />
        {/* Submit Button */}
        <button disabled={!canSave}>Save Post</button>
        {/* Disable if canSave is false */}
      </form>
    </section>
  );
}
