const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3300;

app.use('/', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.use('/', require('./routes/root'));

app.all('*', (req, res) => {
  res.status(404);
  // console.log(req.get('Accept'));
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Fond!' });
  } else if (req.accepts('text/plain')) {
    req.type('txt').send('404 Not Fond');
  } else {
    res.json({ message: '406 Not Acceptable' });
  }
});

app.listen(port, () =>
  console.log(`You can make requests to: \nhttp://localhost:${port}`)
);
