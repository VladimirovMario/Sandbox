import axios from '../../api/axios';
import { apiEndpoints } from '../../constants/apiEndpoints';
import { useAuth } from './useAuth';

function useLogout() {
  const { handleLogout } = useAuth();

  const logout = async () => {
    handleLogout();
    try {
      await axios.get(apiEndpoints.LOGOUT);
    } catch (error) {
      console.error(error);
    }
  };
  return logout;
}

export default useLogout;
