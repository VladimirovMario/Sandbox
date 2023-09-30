// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector
import { useSelector } from 'react-redux';
import { selectPostIds, getPostsStatus, getPostsError } from './postsSlice';

import PostsExcerpt from './PostsExcerpt';

export default function PostsList() {
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content = <></>;

  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  }
  if (postsStatus === 'succeeded') {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  }
  if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
}
