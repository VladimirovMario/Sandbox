import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { selectUserById } from './usersSlice';
import { selectAllPosts } from '../posts/postsSlice';

export const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, userId));

  const postsForUser = useSelector((state) =>
    selectAllPosts(state).filter((post) => post.user === userId)
  );

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  );
};