import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';

export default function AddPostForm() {
  const dispatch = useDispatch();

  // State to store form input values
  const [values, setValues] = useState({ title: '', content: '' });

  // Function to handle input changes
  function handleChange(e) {
    // Update the specific field (title or content) in the 'values' state
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  // Function to handle form submission
  function handlePostSave(e) {
    e.preventDefault();

    // Check if both 'title' and 'content' fields have values
    if (values.title && values.content) {
      // Dispatch the 'postAdded' action with title and content as parameters
      dispatch(postAdded(values.title, values.content));

      // Reset form fields to empty strings
      setValues(
        Object.fromEntries(Object.keys(values).map((key) => [key, '']))
      );
    }
  }

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
        <button>Save Post</button>
      </form>
    </section>
  );
}
