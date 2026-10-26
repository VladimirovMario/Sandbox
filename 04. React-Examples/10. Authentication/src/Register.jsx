import { useState } from 'react';

function Register() {
  const [serverResponse, setServerResponse] = useState();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [values, setValues] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const handlesChange = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({
        userName: values.userName.trim(),
        password: values.password.trim(),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((json) => setServerResponse(json));
  };

  if (serverResponse) {
    console.log('server response', serverResponse);
  }

  return (
    <section className="register-section">
      <h2 className="section-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={values.userName}
          onChange={handlesChange}
        />
        <div className="pass-container">
          <input
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
        <div className="pass-container">
          <input
            type={isConfirmVisible ? 'text' : 'password'}
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handlesChange}
          />
          <button
            className="toggle-pass"
            type="button"
            onClick={() => setIsConfirmVisible(!isConfirmVisible)}
          >
            {isConfirmVisible ? 'hide' : 'show'}
          </button>
        </div>
        <button className="register-cta" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}

export default Register;
