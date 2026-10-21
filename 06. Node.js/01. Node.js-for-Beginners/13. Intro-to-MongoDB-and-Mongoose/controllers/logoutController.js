const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require('fs/promises');
const path = require('path');

const handleLogout = async (req, res) => {
  // On the client delete in memory accessToken
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }
  const refreshToken = cookies.jwt;

  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken,
  );

  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true });
    return res.sendStatus(204);
  }

  // Delete refreshToken in the database
  const otherUsers = usersDB.users.filter(
    (person) => person.refreshToken !== refreshToken,
  );
  usersDB.setUsers([...otherUsers, { ...foundUser, refreshToken: '' }]);
  const filePath = path.join(__dirname, '..', 'model', 'users.json');
  await fsPromises.writeFile(filePath, JSON.stringify(usersDB.users, null, 2));
  res.clearCookie('jwt', { httpOnly: true }); // secure: true - only for servers on https
  return res.sendStatus(204);
};

module.exports = { handleLogout };
