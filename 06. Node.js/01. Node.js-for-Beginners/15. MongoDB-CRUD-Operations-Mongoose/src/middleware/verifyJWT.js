const jwt = require('jsonwebtoken');
const { ENV_VARIABLES } = require('../constants/envVariables');

const verifyJWT = (req, res, next) => {
  const authHeder = req.headers['authorization'];

  if (!authHeder) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeder.split(' ')[1];
  jwt.verify(token, ENV_VARIABLES.accessTokenSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    const user = decoded.UserInfo;
    req.user = user.userName;
    req.roles = user.roles;
    next();
  });
};

module.exports = verifyJWT;
