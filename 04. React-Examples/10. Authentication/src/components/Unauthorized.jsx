import { useNavigate } from 'react-router-dom';

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Unauthorized</h1>
      <p>You do not have access to the requested page.</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </section>
  );
}

export default Unauthorized;
