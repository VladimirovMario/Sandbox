const User = require('../model/User');
const jwt = require('jsonwebtoken');
const { ENV_VARIABLES } = require('../constants/envVariables');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }
  const refreshToken = cookies.jwt;

  try {
    const foundUser = await User.findOne({ refreshToken }).exec();

    if (!foundUser) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    jwt.verify(
      refreshToken,
      ENV_VARIABLES.refreshTokenSecret,
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
          ENV_VARIABLES.accessTokenSecret,
          { expiresIn: '60s' },
        );
        res.json({ accessToken });
      },
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
      details: 'Failed to retrieve refresh token',
    });
  }
};

module.exports = {
  handleRefreshToken,
};
