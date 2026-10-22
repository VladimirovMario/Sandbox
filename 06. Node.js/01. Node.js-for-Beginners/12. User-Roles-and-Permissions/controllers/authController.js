const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fsPromises = require('fs/promises');
const path = require('path');

const handleLogin = async (req, res) => {
  const { user, pass } = req.body;

  if (!user || !pass) {
    return res
      .status(409)
      .json({ message: 'Username and password are required.' });
  }

  const foundUser = usersDB.users.find((person) => person.userName === user);

  if (!foundUser) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }

  try {
    const match = await bcrypt.compare(pass, foundUser.password);
    if (!match) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }
    // create JWT
    const accessToken = jwt.sign(
      {
        userName: foundUser.userName,
      },
      process.env.ACCESS_TOKEN_SECRET,
      // { expiresIn: '1h' },
      { expiresIn: '60s' },
    );

    const refreshToken = jwt.sign(
      {
        userName: foundUser.userName,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' },
    );

    const otherUsers = usersDB.users.filter(
      (person) => person.userName !== foundUser.userName,
    );
    usersDB.setUsers([...otherUsers, { ...foundUser, refreshToken }]);
    const filePath = path.join(__dirname, '..', 'model', 'users.json');
    await fsPromises.writeFile(
      filePath,
      JSON.stringify(usersDB.users, null, 2),
    );

    res.cookie('jwt', refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    });
    res.json({ accessToken });
  } catch (error) {
    res.json({ message: error.message });
  }
  res.end();
};

module.exports = {
  handleLogin,
};
