const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (_, res) =>
  res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html')),
);

router.get('/test', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'));
});

module.exports = router;
