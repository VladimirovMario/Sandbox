const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { connectDB } = require('./src/config/dbConnection');
const { logger } = require('./src/middleware/logEvents');
const corsOptions = require('./src/config/corsOptions');
const { errorHandler } = require('./src/middleware/errorHandler');
const verifyJWT = require('./src/middleware/verifyJWT');
const credentials = require('./src/middleware/credentials');
const { ENV_VARIABLES } = require('./src/constants/envVariables');

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
app.use('/', require('./src/routes/root'));
app.use('/register', require('./src/routes/api/register'));
app.use('/login', require('./src/routes/api/login'));
app.use('/refresh', require('./src/routes/api/refresh'));
app.use('/logout', require('./src/routes/api/logout'));
app.use('/employees', verifyJWT, require('./src/routes/api/employees'));
app.use('/users', verifyJWT, require('./src/routes/api/users'));
app.use(require('./src/routes/notFound'));

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
