import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/hooks/useAuth';
import { apiEndpoints } from '../constants/apiEndpoints';

function Logout() {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  return (
    <button
      className="logout-button"
      onClick={() => {
        handleLogout();
        axios.get(apiEndpoints.LOGOUT);
        navigate('/login');
      }}
    >
      Sign Out
    </button>
  );
}

export default Logout;
