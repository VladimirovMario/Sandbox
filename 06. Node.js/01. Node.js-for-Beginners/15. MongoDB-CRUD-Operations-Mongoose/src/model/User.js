const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: { type: String, required: true },
  roles: {
    User: { type: Number, default: 2001 },
    Editor: Number,
    Admin: Number,
  },
  password: { type: String, required: true },
  refreshToken: String,
});

const User = model('User', userSchema);

module.exports = User;
