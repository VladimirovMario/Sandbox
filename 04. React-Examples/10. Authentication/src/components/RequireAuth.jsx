import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/hooks/useAuth';

function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.userName ? (
    <Outlet />
  ) : (
    // The state and the from location are used to redirect the user back to the page they were trying to access after login.
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
