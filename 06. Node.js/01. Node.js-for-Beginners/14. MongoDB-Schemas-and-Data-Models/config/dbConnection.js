const mongoose = require('mongoose');

const DATABASE = 'CompanyDB';
const CONNECTION_URI =
  globalThis.process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${DATABASE}`;

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
