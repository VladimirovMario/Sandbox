const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('./config/dbConnection');
const { logger } = require('./middleware/logEvents');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const { ENV_VARIABLES } = require('./constants/envVariables');

const app = express();
// Connection to Database
connectDB();
// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
app.use(credentials);
// Node.js middleware for Express/Connect that sets CORS response headers
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: true }));
// built-in middleware that parses incoming requests with JSON payloads
app.use(express.json());

// middleware for  cookies
app.use(cookieParser());

// built‑in middleware that serves files from a directory on disk as HTTP responses
app.use(express.static('public'));

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/api/register'));
app.use('/login', require('./routes/api/login'));
app.use('/refresh', require('./routes/api/refresh'));
app.use('/logout', require('./routes/api/logout'));
app.use('/employees', verifyJWT, require('./routes/api/employees'));
app.use(require('./routes/notFound'));

// custom error middleware
app.use(errorHandler);

mongoose.connection.on('error', (err) => {
  console.error(err);
});

mongoose.connection.once('open', () => {
  console.log('Database connected');
  app.listen(ENV_VARIABLES.port, () => {
    console.log(
      `Rest service operational\nhttp://localhost:${ENV_VARIABLES.port}`,
    );
  });
});
