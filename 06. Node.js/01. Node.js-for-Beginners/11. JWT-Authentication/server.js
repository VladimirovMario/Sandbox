const express = require('express');
const app = express();
require('dotenv').config();
const { logger } = require('./middleware/logEvents');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

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
app.use('/employees', verifyJWT, require('./routes/api/employees'));
app.use(require('./routes/notFound'));

// custom error middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Rest service operational.\nhttp://localhost:${PORT}`);
});
