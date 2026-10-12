const express = require('express');
const app = express();
const path = require('node:path');
const PORT = process.env.PORT || 3500;

// app.get('/', (req, res, next) => {
//   const options = {
//     root: path.join(__dirname, 'views'),
//   };

//   const fileName = 'index.html';
//   res.sendFile(fileName, options, (err) => {
//     if (err) {
//       console.log(err);
//       next(err);
//     } else {
//       console.log('Send: ', fileName);
//     }
//   });
// });

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
