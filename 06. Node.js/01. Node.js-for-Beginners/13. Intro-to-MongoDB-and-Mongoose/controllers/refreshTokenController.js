const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  },
};
const jwt = require('jsonwebtoken');

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }
  const refreshToken = cookies.jwt;

  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken,
  );

  if (!foundUser) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET || 'your_refresh_token_secret',
    (err, verified) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      const roles = Object.values(foundUser.roles);
      const accessToken = jwt.sign(
        {
          // https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims
          UserInfo: {
            userName: verified.userName,
            roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET || 'your_access_token_secret',
        { expiresIn: '60s' },
      );
      res.json({ accessToken });
    },
  );
};

module.exports = {
  handleRefreshToken,
};
