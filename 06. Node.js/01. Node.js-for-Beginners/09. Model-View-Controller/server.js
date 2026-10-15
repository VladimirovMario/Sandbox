const express = require('express');
const app = express();
const path = require('node:path');
const { logger } = require('./middleware/logEvents');
const corsOptions = require('./config/corsOptions');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// Node.js middleware for Express/Connect that sets CORS response headers
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: true }));
// built-in middleware that parses incoming requests with JSON payloads
app.use(express.json());

// built‑in middleware that serves files from a directory on disk as HTTP responses
app.use(express.static('public'));
app.use('/subdir', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/subDir'));
app.use('/employees', require('./routes/api/employees'));
app.use(require('./routes/notFound'));

// custom error middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Rest service operational.\nhttp://localhost:${PORT}`);
});
