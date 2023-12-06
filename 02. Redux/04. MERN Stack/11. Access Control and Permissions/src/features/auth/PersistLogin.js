import { Outlet, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useRefreshMutation } from './authApiSlice';
import usePersist from '../../hooks/usePersist';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCurrentToken } from './authSlice';

const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {
    // Check if the effect has already run or if it's not in development mode
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      // Function to verify the refresh token
      const verifyRefreshToken = async () => {
        // console.log('verifying refresh token');

        try {
          // Call the refresh mutation
          await refresh();

          // const response = await refresh();
          // Extract the access token from the response
          // const { accessToken } = response.data;
          // console.log('accessToken', accessToken.slice(0, 9));

          // Set the true success state to true
          setTrueSuccess(true);
        } catch (error) {
          // Log any errors during token verification
          console.error(error);
        }
      };

      // Check if there is no token and persistence is enabled
      if (!token && persist) {
        verifyRefreshToken();
      }
    }

    // Cleanup function to mark that the effect has run
    return () => {
      effectRan.current = true;
    };

    // Run this effect only once when the component mounts
    // eslint-disable-next-line
  }, []);

  // Content rendering based on different conditions
  let content;
  if (!persist) {
    // If persistence is disabled, render the Outlet
    // console.log('persistence is disabled');
    content = <Outlet />;
  }

  if (isLoading) {
    // If loading, render a loading message
    // console.log('loading...');
    return <p>Loading...</p>;
  }

  if (isError) {
    // Log any errors during token verification; global error handling will handle them
    // If there is an error, render an error message with a link to the login page
    // persist: yes, token: no
    console.error('error');
    content = (
      <p className="errmsg">
        {error?.data?.message}
        <Link to="/login">Please login</Link>
      </p>
    );
  }

  if (isSuccess && trueSuccess) {
    // If there is success and the true success state is true, render the Outlet
    // persist: yes, token: yes
    // console.log('success');
    content = <Outlet />;
  }

  if (token && isUninitialized) {
    // If there is a token and it's uninitialized, render the Outlet
    // persist: yes, token: yes
    // console.log('token and uninit');
    // console.log('isUninitialized', isUninitialized);
    content = <Outlet />;
  }

  // Return the determined content
  return content;
};

export default PersistLogin;
