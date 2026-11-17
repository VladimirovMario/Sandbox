import axios from '../api/axios';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { apiEndpoints } from '../constants/apiEndpoints';
import { useAuth } from '../auth/hooks/useAuth';

function Login({ initialValues }) {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { handleSetAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

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
      const accessToken = response.data?.accessToken;
      handleSetAuth({ accessToken });

      setValues(initialValues);
      setIsSubmitting(false);
      navigate(from, { replace: true });
    } catch (error) {
      setValues(initialValues);
      setIsSubmitting(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data?.message);
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
      // console.log(error.config);
    }
  };

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
      <p>
        <span>
          <Link to="/register">Don't have an account</Link>
        </span>
      </p>
    </section>
  );
}

export default Login;
