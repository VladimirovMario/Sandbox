import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setCredentials } from './authSlice';
import { useLoginMutation } from './authApiSlice';

const Login = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  // const [login, { isLoading, isError, error }] = useLoginMutation();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email, password }).unwrap();
      // console.log('userData from login component', userData);
      // { _id: "654b61faa104880dd81b9569", email: "peter@abv.bg", username: "Peter", token: "eyJhbJfaW" }
      dispatch(setCredentials(userData));

      setEmail('');
      setPassword('');
      // see the requirements
      navigate('/welcome');
    } catch (err) {
      // The error comes from the server!

      // console.log('Error from mutation hook', isError, error);
      // console.log('Error object from catch block', err);
      setErrMsg(err.data?.message);
      errRef.current.focus();
    }
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="login">
      <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'}>
        {errMsg}
      </p>

      <h1>Employee Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          ref={userRef}
          value={email}
          name="email"
          onChange={handleEmailInput}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          name="password"
          onChange={handlePasswordInput}
          required
        />
        <button>Sign in</button>
      </form>
    </section>
  );

  return content;
};

export default Login;
