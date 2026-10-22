const User = require('../model/User');

const handleLogout = async (req, res) => {
  // On the client delete in memory accessToken
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }
  const refreshToken = cookies.jwt;

  try {
    const foundUser = await User.findOne({ refreshToken }).exec();

    foundUser.refreshToken = '';
    await foundUser.save();

    res.clearCookie('jwt', { httpOnly: true }); // secure: true - only for servers on https

    return res.sendStatus(204);
  } catch (error) {
    res.clearCookie('jwt', { httpOnly: true });
    // TODO: Determine which errors can occur and return appropriate status codes and messages.
    res.status(500).json({
      message: error.message,
      details: 'Failed to logout refresh token',
    });
  }
};

module.exports = { handleLogout };
