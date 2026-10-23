const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ENV_VARIABLES } = require('../constants/envVariables');

const handleLogin = async (req, res) => {
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

    const refreshToken = jwt.sign(
      {
        userName: foundUser.userName,
      },
      ENV_VARIABLES.refreshTokenSecret,
      { expiresIn: '1d' },
    );

    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    res.cookie('jwt', refreshToken, {
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
