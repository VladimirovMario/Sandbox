const mongoose = require('mongoose');

const connectionString = 'mongodb://0.0.0.0:27017/redux-auth';

module.exports = async (app) => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('✅ Database connected');
  } catch (error) {
    console.error('❌ Error initializing database');
    console.error(error.message);
    process.exit(1);
  }
};
