import { useNavigate } from 'react-router-dom';
import useLogout from '../auth/hooks/useLogout';

function Logout() {
  const navigate = useNavigate();
  const logout = useLogout();

  return (
    <button
      className="logout-button"
      onClick={() => {
        logout();
        navigate('/linkPage');
      }}
    >
      Sign Out
    </button>
  );
}

export default Logout;
