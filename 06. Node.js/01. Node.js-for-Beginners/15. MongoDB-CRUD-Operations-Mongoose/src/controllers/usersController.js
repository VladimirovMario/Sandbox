const User = require('../model/User');
const mongoose = require('mongoose');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().exec();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.isObjectIdOrHexString(id)) {
    return res.status(400).json({ message: 'Invalid employee ID format' });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res
      .status(200)
      .json({ message: `User with ID: ${deletedUser._id} was deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getAllUsers,
  deleteUserById,
};
