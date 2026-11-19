import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useRefreshToken from '../auth/hooks/useRefreshToken';
import { useAuth } from '../auth/hooks/useAuth';

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    // TODO fix the issues
    !auth?.accessToken
      ? setTimeout(() => {
          verifyRefreshToken();
        }, 1200)
      : setIsLoading(false);
  }, []);

  return <>{isLoading ? <p>Initial loading...</p> : <Outlet />}</>;
}

export default PersistLogin;
