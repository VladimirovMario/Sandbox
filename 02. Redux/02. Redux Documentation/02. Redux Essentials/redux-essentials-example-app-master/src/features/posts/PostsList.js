import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectAllPosts } from './postsSlice';

import { Spinner } from '../../components/Spinner';
import { PostExcerpt } from './PostExcerpt';

export const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
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
    content = posts
      .slice()
      .sort((a, b) => b.date?.localeCompare(a.date))
      .map((post) => <PostExcerpt key={post.id} post={post} />);
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
