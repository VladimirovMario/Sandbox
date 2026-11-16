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
          <Route path="/" element={<Home />} />
          <Route path="editor" element={<Editor />} />
          <Route path="admin" element={<Admin />} />
          <Route path="lounge" element={<Lounge />} />

          {/* Not found route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
