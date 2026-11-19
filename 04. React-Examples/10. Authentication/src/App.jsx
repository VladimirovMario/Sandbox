import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';
import Unauthorized from './components/Unauthorized';
import LinkPage from './components/LinkPage';
import Home from './components/Home';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import NotFound from './components/NotFound';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import './App.css';

function App() {
  const initialLoginValues = { userName: '', password: '' };
  const initialRegisterValues = {
    userName: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route
            path="/register"
            element={<Register initialValues={initialRegisterValues} />}
          />
          <Route
            path="/login"
            element={<Login initialValues={initialLoginValues} />}
          />
          <Route path="/linkPage" element={<LinkPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[2001]} />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[1984]} />}>
              <Route path="editor" element={<Editor />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[5150]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[1984, 5150]} />}>
              <Route path="lounge" element={<Lounge />} />
            </Route>
          </Route>

          {/* Not found route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
