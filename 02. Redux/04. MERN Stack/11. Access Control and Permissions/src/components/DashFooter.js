import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const DashFooter = () => {
  // Use the useAuth hook to get current user information and status
  const { username, status } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Handler for navigating to the home page
  const onGoHomeClicked = () => navigate('/dash');

  // Conditional rendering of the "Go Home" button based on the current path
  let goHomeButton = <></>;
  if (pathname !== '/dash') {
    goHomeButton = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  // Content to be rendered in the DashFooter component
  const content = (
    <footer className="dash-footer">
      {goHomeButton}
      <p>Current User: {username}</p>
      <p>Status: {status}</p>
    </footer>
  );

  return content;
};

export default DashFooter;
