const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeder = req.headers['authorization'];

  if (!authHeder) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeder.split(' ')[1];
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET || 'your_access_token_secret',
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      const user = decoded.UserInfo;
      req.user = user.userName;
      req.roles = user.roles;
      next();
    },
  );
};

module.exports = verifyJWT;
