import { useSelector } from 'react-redux';
import { selectUserById } from './usersSlice';
import { useGetPostsByUserIdQuery } from '../posts/postsSlice';
import { Link, useParams } from 'react-router-dom';

export default function User() {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(userId);

  let content = <></>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (isSuccess) {
    const { ids, entities } = postsForUser;
    // console.log(ids, entities);
    content = ids.map((id) => (
      <li key={id}>
        <Link to={`/post/${id}`}>{entities[id].title}</Link>
      </li>
    ));
  }
  if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{content}</ol>
    </section>
  );
}
