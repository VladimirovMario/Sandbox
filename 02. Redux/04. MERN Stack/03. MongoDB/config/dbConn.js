const mongoose = require('mongoose');

const uri = process.env.DATABASE_URI || 'mongodb://0.0.0.0:27017/tech-notes';

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
