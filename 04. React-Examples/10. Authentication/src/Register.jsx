import { useState } from 'react';
import axios from './api/axios';
import { apiEndpoints } from './constants/apiEndpoints';

function Register({ initialValues }) {
  const [serverResponse, setServerResponse] = useState();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handlesChange = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errorMessage) setErrorMessage('');
    if (success) setSuccess(false);

    if (Object.values(values).some((v) => !v.trim())) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (values.password !== values.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(apiEndpoints.REGISTER, {
        userName: values.userName.trim(),
        password: values.password.trim(),
      });
      // console.log('server response:', response.data);
      // console.log('JSON.stringify(response)', JSON.stringify(response));
      setValues(initialValues);
      setServerResponse(response.data);
      setSuccess(true);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(
        error?.message || 'Registration failed. Please try again.',
      );
      setIsLoading(false);
    }
  };

  return (
    <section className="register-section">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <h2 className="section-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registerUser">Username</label>
          <input
            id="registerUser"
            type="text"
            name="userName"
            value={values.userName}
            onChange={handlesChange}
          />
        </div>
        <div>
          <label htmlFor="registerPassword">Password</label>
          <div className="pass-container">
            <input
              id="registerPassword"
              type={isPassVisible ? 'text' : 'password'}
              name="password"
              value={values.password}
              onChange={handlesChange}
            />
            <button
              className="toggle-pass"
              type="button"
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? 'hide' : 'show'}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="registerConfirm">Confirm Password</label>
          <div className="pass-container">
            <input
              id="registerConfirm"
              type={isConfirmVisible ? 'text' : 'password'}
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handlesChange}
            />
            <button
              className="toggle-pass"
              type="button"
              onClick={() => setIsConfirmVisible((prev) => !prev)}
            >
              {isConfirmVisible ? 'hide' : 'show'}
            </button>
          </div>
        </div>
        <button className="register-cta" type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {success && (
        <>
          <p className="success-message">{serverResponse?.message}</p>
          <p className="success-message">
            You can now log in with your new account.
          </p>
          <a href="Login">Login</a>
        </>
      )}
    </section>
  );
}

export default Register;
