import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/auth/authSlice';
// https://www.npmjs.com/package/jwt-decode
// import { jwtDecode } from 'jwt-decode';
import { ROLES } from '../config/roles';
import { jwtDecode } from '../utils/jwtDecode';

const useAuth = () => {
  // Get the current authentication token from the Redux store
  const token = useSelector(selectCurrentToken);

  // Default values for role-based information
  let isManager = false;
  let isAdmin = false;
  let status = ROLES.Employee;

  if (token) {
    try {
      // Decode the JWT token to extract user information
      // const { username, roles } = decoded;
      const decoded = jwtDecode(token);
      const { username, roles } = decoded.UserInfo;

      // Check if the user has the Manager role
      isManager = roles.includes(ROLES.Manager);
      // Check if the user has the Admin role
      isAdmin = roles.includes(ROLES.Admin);

      if (isManager) {
        status = ROLES.Manager;
      }

      if (isAdmin) {
        status = ROLES.Admin;
      }

      // Return user information
      return { username, roles, status, isManager, isAdmin };
    } catch (error) {
      // Handle any errors that may occur during token decoding
      console.error('Error decoding token:', error);
      // You can handle the error as needed, e.g., log, show a message, or fallback to default values.
      // Return default values when there's no token
      return { username: '', roles: [], status, isManager, isAdmin };
    }
  }
  // Return default values when there's no token
  return { username: '', roles: [], status, isManager, isAdmin };
};

export default useAuth;
