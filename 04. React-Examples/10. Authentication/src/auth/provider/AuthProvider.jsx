import { useState } from 'react';
import AuthContext from '../context/AuthContext';
import { jwtDecode } from '../../utils/jwtDecode';

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const handleSetAuth = ({ accessToken }) => {
    const decodedToken = jwtDecode(accessToken);
    setAuth(decodedToken.UserInfo);
  };

  return (
    <AuthContext.Provider value={{ auth, handleSetAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
