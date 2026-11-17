import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/hooks/useAuth';

function RequireAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : auth?.userName ? (
    // The state and the from location are used to redirect the user back to the page they were trying to access after login.
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
