const express = require('express');
const app = express();
const path = require('node:path');
const { logger } = require('./middleware/logEvents');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// custom middleware logger
app.use(logger);

// CORS is a Node.js middleware for Express/Connect that sets CORS response headers.
// These headers tell browsers which origins can read responses from your server.

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
// https://web.dev/articles/cross-origin-resource-sharing
const whiteList = ['https://www.youtube.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by Cors!'));
    }
  },
};
app.use(cors(corsOptions));

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
app.use('/subdir', express.static(path.join(__dirname, '/public')));

app.use('/subdir', require('./routes/subDir'));

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
  // console.log(req.get('Accept'));
  // console.log(req.accepts('application/json'));
  // if (req.accepts('html')) {
  //   res.status(404).json({ error: '404 Page not fount' });
  // } else if (req.accepts('json')) {
  //   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  // } else {
  //   // Check if the given type(s) is acceptable, returning the best match when true,
  //   // otherwise undefined, in which case you should respond with 406 "Not Acceptable"
  //   res.status(406).json({ error: 'Not Acceptable' });
  // }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Rest service operational.\nhttp://localhost:${PORT}`);
});
