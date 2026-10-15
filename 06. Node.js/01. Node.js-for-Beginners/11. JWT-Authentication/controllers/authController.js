const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require('bcrypt');

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
    res.json({ message: `User ${user} logged in.` });
  } catch (error) {
    res.json({ message: error.message });
  }
  res.end();
};

module.exports = {
  handleLogin,
};
