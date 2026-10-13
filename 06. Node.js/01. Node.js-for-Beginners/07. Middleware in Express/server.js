const express = require('express');
const app = express();
const path = require('node:path');
const { logger } = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// built-in middleware to handle urlencoded data
// in other words, form data
// parse requests with a Content-Type of application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// This is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// express.static is a built‑in middleware that serves files from a directory on disk as HTTP responses.
// It serves static assets such as HTML files, images, and so on.
// It looks up the requested URL path, joins it with the configured root directory, and streams the file back to the client.
// If the file isn’t found, the middleware calls next() so subsequent handlers can run.
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page{.html}', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page{.html}', (req, res) => {
  res.redirect(301, '/new-page.html');
});

// Rout handlers
app.get(
  '/hello{.html}',
  (req, res, next) => {
    console.log('Attempted to load hello.html');
    next();
  },
  (req, res) => {
    res.send('Hello world');
  },
);

const one = (req, res, next) => {
  console.log('one');
  next();
};

const two = (req, res, next) => {
  console.log('two');
  next();
};

const three = (req, res) => {
  console.log('three');
  res.send('Middleware chain finished');
};

app.get('/chain', [one, two, three]);

// https://expressjs.com/en/5x/starter/faq/#how-do-i-handle-404-responses
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Rest service operational.\nhttp://localhost:${PORT}`);
});
