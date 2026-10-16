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
    process.env.REFRESH_TOKEN_SECRET,
    (err, verified) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      const accessToken = jwt.sign(
        {
          userName: verified.userName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '60s' },
      );
      res.json({ accessToken });
    },
  );
};

module.exports = {
  handleRefreshToken,
};
