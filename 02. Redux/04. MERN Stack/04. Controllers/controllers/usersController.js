const User = require('../models/User');
const Note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

// @desc Get all users
// @route Get /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean();
  if (!users.length) {
    return res.status(400).json({ message: 'No users found!' });
  }

  res.json(users);
});

// @desc Create new user
// @route Post /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Check for existing
  const existing = await User.findOne({ username })
    .collation({
      locale: 'en',
      strength: 2,
    })
    .lean()
    // https://stackoverflow.com/questions/31549857/mongoose-what-does-the-exec-function-do
    // https://mongoosejs.com/docs/promises.html#should-you-use-exec-with-await
    .exec();

  if (existing) {
    return res.status(409).json({ message: 'Username already exist' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userObject = {
    username,
    password: hashedPassword,
    roles,
  };

  // Create and store the user
  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});

// @desc Update user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, password, roles, active } = req.body;

  // Confirm data
  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== 'boolean'
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const existing = await User.findOne({ username })
    .collation({
      locale: 'en',
      strength: 2,
    })
    .lean()
    .exec();
  // Allow updates to the original user
  if ((existing && existing?._id.toString()) !== id) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  user.username = username;
  user.roles = roles;
  user.active = active;
  if (password) {
    // Hash password
    user.password = await bcrypt(password, 10);
  }

  const updatedUser = await user.save();
  res.json({ message: `${updatedUser.username} updated` });
});

// @desc Delete user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'User ID required' });
  }

  const note = await Note.findOne({ user: id }).lean().exec();
  if (note) {
    return res.status(400).json({ message: 'User has assigned notes' });
  }

  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const deletedUser = await User.findByIdAndDelete(id);

  console.log(deletedUser);

  const reply = `Username ${deletedUser.username} with ID ${deletedUser._id} deleted`;

  res.json({ message: reply });
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
