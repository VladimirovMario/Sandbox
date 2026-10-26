const User = require('../model/User');
const jwt = require('jsonwebtoken');
const { ENV_VARIABLES } = require('../constants/envVariables');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }
  const refreshToken = cookies.jwt;
  res.clearCookie('jwt', { httpOnly: true });

  try {
    const foundUser = await User.findOne({ refreshToken }).exec();

    // Detect refresh token reuse
    if (!foundUser) {
      jwt.verify(
        refreshToken,
        ENV_VARIABLES.refreshTokenSecret,
        async (err, verified) => {
          if (err) {
            return res.status(403).json({ message: 'Forbidden' });
          }
          console.log('attempted refresh token reuse');
          const hackedUser = await User.findOne({
            userName: verified.userName,
          }).exec();
          hackedUser.refreshToken = [];
          const result = await hackedUser.save();
          console.log(result);
        },
      );
      return res.status(403).json({ message: 'Forbidden' });
    }

    const newRefreshTokenArray = foundUser.refreshToken.filter(
      (rt) => rt !== refreshToken,
    );

    jwt.verify(
      refreshToken,
      ENV_VARIABLES.refreshTokenSecret,
      async (err, verified) => {
        if (err) {
          console.log('expired refresh token');
          foundUser.refreshToken = [...newRefreshTokenArray];
          const result = await foundUser.save();
          console.log(result);
        }
        if (err || foundUser.userName !== verified.userName) {
          return res.status(403).json({ message: 'Forbidden' });
        }
        // Refresh token was still valid
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

        const newRefreshToken = jwt.sign(
          {
            userName: foundUser.userName,
          },
          ENV_VARIABLES.refreshTokenSecret,
          { expiresIn: '1d' },
        );
        // saving refresh token with current user
        foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        await foundUser.save();

        res.cookie('jwt', newRefreshToken, {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
        });

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
