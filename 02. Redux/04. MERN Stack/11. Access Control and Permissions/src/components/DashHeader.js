import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCirclePlus,
  faFilePen,
  faUserGear,
  faUserPlus,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';

import { useSendLogoutMutation } from '../features/auth/authApiSlice';

import useAuth from '../hooks/useAuth';

const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashHeader = () => {
  // Retrieve user information and roles using the useAuth hook
  const { isAdmin, isManager } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  // Function to handle the click event for the "New Note" button
  const onNewNoteClicked = () => navigate('/dash/notes/new');
  // Function to handle the click event for the "New User" button
  const onNewUserClicked = () => navigate('/dash/users/new');
  // Function to handle the click event for the "Users" button
  const onUsersClicked = () => navigate('/dash/users');
  // Function to handle the click event for the "Notes" button
  const onNotesClicked = () => navigate('/dash/notes');

  // Function to handle the click event for the "Logout" button
  const onLogOutClicked = () => sendLogout();

  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = 'dash-header__container--small';
  }

  // Conditional rendering for the "New Note" button based on the current route
  let newNoteButton = null;
  if (NOTES_REGEX.test(pathname)) {
    newNoteButton = (
      <button
        className="icon-button"
        title="New Note"
        onClick={onNewNoteClicked}
      >
        <FontAwesomeIcon icon={faFileCirclePlus} />
      </button>
    );
  }

  // Conditional rendering for the "New User" button based on the current route
  let newUserButton = null;
  if (USERS_REGEX.test(pathname)) {
    newUserButton = (
      <button
        className="icon-button"
        title="New User"
        onClick={onNewUserClicked}
      >
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    );
  }

  // Conditional rendering for the "Users" button based on user roles and the current route
  let userButton = null;
  if (isManager || isAdmin) {
    if (USERS_REGEX.test(pathname) === false && pathname.includes('/dash')) {
      userButton = (
        <button className="icon-button" title="Users" onClick={onUsersClicked}>
          <FontAwesomeIcon icon={faUserGear} />
        </button>
      );
    }
  }

  // Conditional rendering for the "Notes" button based on the current route
  let notesButton = null;
  if (NOTES_REGEX.test(pathname) === false && pathname.includes('/dash')) {
    notesButton = (
      <button className="icon-button" title="Notes" onClick={onNotesClicked}>
        <FontAwesomeIcon icon={faFilePen} />
      </button>
    );
  }

  const logoutButton = (
    <button className="icon-button" title="Logout" onClick={onLogOutClicked}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );

  // Conditional rendering for the content based on loading state
  let buttonContent = <></>;
  if (isLoading) {
    buttonContent = <p>Logging Out...</p>;
  } else {
    buttonContent = (
      <>
        {newNoteButton}
        {newUserButton}
        {notesButton}
        {userButton}
        {logoutButton}
      </>
    );
  }

  const errClass = isError ? 'errmsg' : 'offscreen';

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <header className="dash-header">
        <div className={`dash-header__container ${dashClass}`}>
          <Link to="/dash">
            <h1 className="dashe-header__title">Tech notes</h1>
          </Link>
          <nav className="dash-header__nav">{buttonContent}</nav>
        </div>
      </header>
    </>
  );

  return content;
};

export default DashHeader;
