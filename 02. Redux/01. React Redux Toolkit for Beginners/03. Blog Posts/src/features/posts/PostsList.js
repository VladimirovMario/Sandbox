// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector
import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice';

import PostsExcerpt from './PostsExcerpt';

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

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
      .map((post) => <PostsExcerpt key={post.id} post={post} />);
  }
  if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
}
