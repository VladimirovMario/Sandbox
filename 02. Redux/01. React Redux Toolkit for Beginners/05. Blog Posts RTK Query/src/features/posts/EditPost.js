import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectById } from './postsSlice';
import { useParams, useNavigate } from 'react-router-dom';

import { selectAllUsers } from '../users/usersSlice';

import { useUpdatePostMutation, useDeletePostMutation } from './postsSlice';

export default function EditPost() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const post = useSelector((state) => selectById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [values, setValues] = useState({
    title: post?.title,
    body: post?.body,
    userId: post?.userId,
  });
  const { title, body, userId } = values;

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  function handleChange(e) {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  const canSave = [title, body, userId].every(Boolean) && !isLoading;

  async function handlePostSave(e) {
    e.preventDefault();

    if (canSave) {
      try {
        await updatePost({ id: post.id, title, body, userId }).unwrap();

        setValues(Object.fromEntries(Object.keys(values).map((k) => [k, ''])));
        navigate(`/post/${postId}`);
      } catch (error) {
        console.log('Failed to save the post', error.message);
      }
    }
  }

  // Create options for the user dropdown menu
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  async function handlePostDelete() {
    try {
      await deletePost({ id: post.id }).unwrap();

      setValues(Object.fromEntries(Object.keys(values).map((k) => [k, ''])));
      navigate('/');
    } catch (error) {
      console.log('Failed to delete the post', error);
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
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
        <button className="deleteButton" onClick={handlePostDelete}>
          Delete Post
        </button>

        {/* Disable if canSave is false */}
      </form>
    </section>
  );
}
