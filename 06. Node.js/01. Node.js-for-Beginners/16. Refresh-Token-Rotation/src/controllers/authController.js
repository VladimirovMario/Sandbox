const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ENV_VARIABLES } = require('../constants/envVariables');

const handleLogin = async (req, res) => {
  const cookies = req.cookies;
  console.log(`cookie available at login: ${JSON.stringify(cookies)}`);
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(409)
      .json({ message: 'Username and password are required.' });
  }

  try {
    const foundUser = await User.findOne({ userName }).exec();

    if (!foundUser) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }

    const roles = Object.values(foundUser.roles);
    // create JWT

    const accessToken = jwt.sign(
      {
        // https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims
        UserInfo: {
          userName: foundUser.userName,
          roles,
        },
      },
      ENV_VARIABLES.accessTokenSecret,
      // { expiresIn: '1h' },
      { expiresIn: '60s' },
    );

    const newRefreshToken = jwt.sign(
      {
        userName: foundUser.userName,
      },
      ENV_VARIABLES.refreshTokenSecret,
      // { expiresIn: '15s' },
      { expiresIn: '1d' },
    );

    let newRefreshTokenArray = !cookies?.jwt
      ? foundUser.refreshToken
      : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);

    if (cookies?.jwt) {
      /*
      Scenario added here:
        1) User logs in but never uses refresh token and does not logout
        2) The refresh token is stolen
        3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
     */
      const refreshToken = cookies.jwt;
      const foundToken = await User.findOne({ refreshToken }).exec();

      // Detected refresh token reuse!
      if (!foundToken) {
        console.log('attempted refresh token reuse at login!');
        // clear out ALL previous refresh tokens
        newRefreshTokenArray = [];
      }

      res.clearCookie('jwt', { httpOnly: true });
    }

    foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    const result = await foundUser.save();
    console.log(result);

    res.cookie('jwt', newRefreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.json({ accessToken });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  handleLogin,
};
