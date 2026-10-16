const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require('fs/promises');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const handleNewUser = async (req, res) => {
  const { user, pass } = req.body;

  if (!user || !pass) {
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });
  }

  const userNameExist = usersDB.users.find(
    (person) => person.userName === user,
  );
  if (userNameExist) {
    return res.status(409).json({ message: 'Username already exist.' });
  }

  try {
    const hashPassword = await bcrypt.hash(pass, saltRounds);

    const newUser = {
      userName: user,
      password: hashPassword,
    };

    usersDB.setUsers([...usersDB.users, newUser]);
    const filePath = path.join(__dirname, '..', 'model', 'users.json');
    await fsPromises.writeFile(
      filePath,
      JSON.stringify(usersDB.users, null, 2),
    );
    res.status(201).json({ message: `New user ${user} is created.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleNewUser,
};
