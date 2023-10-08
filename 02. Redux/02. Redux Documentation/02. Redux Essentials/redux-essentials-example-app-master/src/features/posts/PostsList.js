import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectPostIds } from './postsSlice';

import { Spinner } from '../../components/Spinner';
import { PostExcerpt } from './PostExcerpt';

export const PostsList = () => {
  const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content = <></>;

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />;
  }
  if (postStatus === 'succeeded') {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  }
  if (postStatus === 'error') {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
