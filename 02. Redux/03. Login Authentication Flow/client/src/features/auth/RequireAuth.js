import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentToken } from './authSlice';

function RequireAuth() {
  const token = useAppSelector(selectCurrentToken);
  // console.log(token.slice(0,9));
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
