import axios from 'axios';
import { useState } from 'react';
import { apiEndpoints } from './constants/apiEndpoints';

function Login() {
  const [serverResponse, setServerResponse] = useState();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [values, setValues] = useState({
    userName: '',
    password: '',
  });

  const handlesChange = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(apiEndpoints.LOGIN, {
      userName: values.userName.trim(),
      password: values.password.trim(),
    });
    setServerResponse(response.data);
  };

  if (serverResponse) {
    console.log('server response', serverResponse);
  }

  return (
    <section className="login-section">
      <h2 className="section-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            name="userName"
            value={values.userName}
            onChange={handlesChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="pass-container">
            <input
              id="password"
              type={isPassVisible ? 'text' : 'password'}
              name="password"
              value={values.password}
              onChange={handlesChange}
            />
            <button
              className="toggle-pass"
              type="button"
              onClick={() => setIsPassVisible(!isPassVisible)}
            >
              {isPassVisible ? 'hide' : 'show'}
            </button>
          </div>
        </div>
        <button className="login-cta" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
