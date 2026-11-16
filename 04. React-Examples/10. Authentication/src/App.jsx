import './App.css';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';

function App() {
  return (
    <>
      <main>
        <Register
          initialValues={{ userName: '', password: '', confirmPassword: '' }}
        />
        <Login initialValues={{ userName: '', password: '' }} />
        <Logout />
      </main>
    </>
  );
}

export default App;
