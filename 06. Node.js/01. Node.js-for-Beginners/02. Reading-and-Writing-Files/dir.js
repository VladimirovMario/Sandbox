const fs = require('node:fs');

if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Directory created');
  });
}

if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Directory removed');
  });
}
