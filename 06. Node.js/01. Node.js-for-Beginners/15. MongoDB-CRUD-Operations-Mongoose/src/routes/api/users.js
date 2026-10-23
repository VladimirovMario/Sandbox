const express = require('express');
const {
  getAllUsers,
  deleteUserById,
} = require('../../controllers/usersController');
const verifyRoles = require('../../middleware/verifyRoles');
const { ROLES_LIST } = require('../../config/rolesList');
const router = express.Router();

router.route('/').get(verifyRoles(ROLES_LIST.Admin), getAllUsers);

router.route('/:id').delete(verifyRoles(ROLES_LIST.Admin), deleteUserById);

module.exports = router;
