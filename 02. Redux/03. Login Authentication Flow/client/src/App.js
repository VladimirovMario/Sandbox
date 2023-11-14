import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import Welcome from './features/auth/Welcome';
import RequireAuth from './features/auth/RequireAuth';
import GamesList from './features/games/GamesList';

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="games" element={<GamesList />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
