const mongoose = require('mongoose');
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';

async function connectDB() {
  try {
    await mongoose.connect(CONNECTION_URI);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  connectDB,
};
