import { useGetGamesQuery } from './gamesApiSlice';
import { Link } from 'react-router-dom';

function GamesList() {
  const {
    data: games = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGamesQuery();

  let content = <></>;

  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  if (isSuccess) {
    content = (
      <section>
        <h1>Games</h1>
        <ul>
          {games.map((game) => (
            <li key={game._id}>
              <h2>{game.title}</h2>
            </li>
          ))}
          <Link to="/welcome">Back to Welcome</Link>
        </ul>
      </section>
    );
  }

  return content;
}

export default GamesList;
