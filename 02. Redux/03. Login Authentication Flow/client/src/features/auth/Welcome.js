import { useAppSelector } from '../../app/hooks';
import { selectCurrentUser, selectCurrentToken } from './authSlice';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);

  const welcome = user ? `Welcome ${user}!` : 'Welcome!';
  const tokenAbbreviation = token ? `${token.slice(0, 9)}...` : '';

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbreviation}</p>
      <p>
        <Link to="/games">Go to the Games List</Link>
      </p>
    </section>
  );

  return content;
};

export default Welcome;
