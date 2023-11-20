const { Schema, model } = require('mongoose');

const collation = {
  locale: 'en',
  strength: 2,
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        default: 'Employee',
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
  { collation: collation }
);

const User = model('User', userSchema);

module.exports = User;
