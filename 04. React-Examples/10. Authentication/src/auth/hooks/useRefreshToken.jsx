import { useAuth } from './useAuth';
import axios from '../../api/axios';
import { apiEndpoints } from '../../constants/apiEndpoints';

function useRefreshToken() {
  const { handleSetAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(apiEndpoints.REFRESH);

    handleSetAuth({ accessToken: response.data.accessToken });
    return response.data.accessToken;
  };

  return refresh;
}

export default useRefreshToken;
