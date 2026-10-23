const mongoose = require('mongoose');
const { ENV_VARIABLES } = require('../constants/envVariables');

async function connectDB() {
  try {
    await mongoose.connect(ENV_VARIABLES.mongoDBUri);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  connectDB,
};
