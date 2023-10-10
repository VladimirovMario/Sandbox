import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useGetPostQuery, useEditPostMutation } from '../api/apiSlice';

export const EditPostForm = () => {
  const { postId } = useParams();

  const { data: post } = useGetPostQuery(postId);
  const [updatePost, { isLoading }] = useEditPostMutation();

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = async (e) => {
    e.preventDefault();

    if (title && content && !isLoading) {
      await updatePost({ id: postId, title, content });
      history.push(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};
