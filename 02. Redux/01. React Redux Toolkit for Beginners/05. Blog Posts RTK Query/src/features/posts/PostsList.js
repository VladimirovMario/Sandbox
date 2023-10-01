import { useSelector } from 'react-redux';
import { selectIds } from './postsSlice';
import { useGetPostsQuery } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

export default function PostsList() {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();

  const orderedPostIds = useSelector(selectIds);

  let content = <></>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (isSuccess) {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  }
  if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
}
