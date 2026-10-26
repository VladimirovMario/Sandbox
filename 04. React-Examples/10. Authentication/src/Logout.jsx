function Logout() {
  const handleLogout = () => {
    fetch('http://localhost:3000/logout', {
      credentials: 'include',
    }).then((response) => {
      const responseStatus = response.status;
      if (responseStatus === 204) {
        console.log('response', response);
      }
    });
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
