import { createContext, useContext, useState } from 'react';

export default function MultipleContexts() {
  return (
    <>
      <h2>Example 3 of 5: Multiple contexts</h2>
      <MyApp />
    </>
  );
}

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

function MyApp() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelcomePanel>
          <label>
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={(e) => {
                setTheme(e.target.checked ? 'dark' : 'light');
              }}
            />
            Use dark mode
          </label>
        </WelcomePanel>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Panel title="Welcome">
        {currentUser !== null ? <Greeting /> : <LoginForm />}
      </Panel>
      {children}
    </>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';

  return (
    <>
      <label>
        First name{': '}
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </label>
      <label>
        Last name{': '}
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({ name: firstName + lastName });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
