const User = require('../model/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const handleNewUser = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });
  }

  // Mongoose queries are not promises. They have a .then() function for co and async/await as a convenience.
  // If you need a fully-fledged promise, use the .exec() function.
  try {
    const userNameExist = await User.findOne({ userName }).exec();
    if (userNameExist) {
      return res.status(409).json({ message: 'Username already exist.' });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ userName, password: hashPassword });
    res.status(201).json({ message: `New user ${user.userName} is created.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleNewUser,
};
