function User({ user }) {
  const { roles, _id, userName, password, refreshToken } = user;

  return (
    <li style={{ border: '1px solid #764ABC', padding: '12px' }}>
      <h3>User name: {userName}</h3>
      <p>_id: {_id}</p>
      <p>Hash password: {password}</p>
      <ol>
        {Object.entries(roles).map(([role, reference]) => {
          return (
            <li key={role}>
              Role: {role} reference: {reference}
            </li>
          );
        })}
      </ol>
      <p>Refresh tokens:</p>
      <ol>
        {refreshToken.map((token, i) => {
          return <li key={i}>{token.substring(0, 32)}</li>;
        })}
      </ol>
    </li>
  );
}

export default User;
