// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from './postsSlice';
import { useEffect } from 'react';
import PostsExcerpt from './PostsExcerpt';

export default function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content = <></>;

  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  }
  if (postsStatus === 'succeeded') {
    // const sorted = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    // content = sorted.map((post, i) => <PostsExcerpt key={i} post={post} />);
    content = posts
      .slice()
      .sort((a, b) => b.id - a.id)
      .map((post, i) => <PostsExcerpt key={i} post={post} />);
  }
  if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
}
