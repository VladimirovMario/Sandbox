import { useState } from 'react';
import AuthContext from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const handleSetAuth = (data) => {
    setAuth(data);
  };

  return (
    <AuthContext.Provider value={{ auth, handleSetAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
