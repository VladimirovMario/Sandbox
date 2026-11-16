import axios from './api/axios';
import { useState } from 'react';
import { apiEndpoints } from './constants/apiEndpoints';

function Login({ initialValues }) {
  const [serverResponse, setServerResponse] = useState();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handlesChange = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post(apiEndpoints.LOGIN, {
        userName: values.userName.trim(),
        password: values.password.trim(),
      });

      setValues(initialValues);
      setServerResponse(response.data);
      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setError(error.response?.data || 'An error occurred');
      setIsSubmitting(false);
    }
  };

  if (serverResponse) {
    console.log('server response', serverResponse);
  }

  return (
    <section className="login-section">
      <h2 className="section-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
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
        <button className="login-cta" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </section>
  );
}

export default Login;
