const { createServer } = require('node:http');
const fs = require('node:fs');
const fsPromises = require('node:fs/promises');
const path = require('node:path');

const logEvents = require('./logEvents');
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
  try {
    const data = await fsPromises.readFile(filePath, 'utf-8');
    response.writeHead(200, { 'Content-Type': contentType });
    response.end(data);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end();
  }
};

const server = createServer((req, res) => {
  console.log(req.url, req.method);

  const extension = path.extname(req.url);

  let contentType;

  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.txt':
      contentType = 'text/plain';
      break;
    default:
      contentType = 'text/html';
  }

  let filePath =
    contentType === 'text/html' && req.url === '/'
      ? path.join(__dirname, 'views', 'index.html')
      : contentType === 'text/html' && req.url.slice(-1) === '/'
        ? path.join(__dirname, 'views', req.url, 'index.html')
        : contentType === 'text/html'
          ? path.join(__dirname, 'views', req.url)
          : path.join(__dirname, req.url);

  // makes .html extension not required in the browser
  if (!extension && req.url.slice(-1) !== '/') {
    filePath += '.html';
  }

  const fileExist = fs.existsSync(filePath);
  if (fileExist) {
    // serve the file
    serveFile(filePath, contentType, res);
  } else {
    switch (path.parse(filePath).base) {
      case 'old-page.html':
        res.writeHead(301, { Location: '/new-page.html' });
        res.end();
        break;
      case 'www-page.html':
        res.writeHead(301, { Location: '/' });
        res.end();
        break;

      default:
        // serve 404 response
        serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        break;
    }
  }
});

server.listen(PORT, () => {
  console.log(`Rest service operational.\nhttp://localhost:${PORT}`);
});
// myEmitter.on('log', (message) => {
//   logEvents(message);
// });

// myEmitter.emit('log', 'New message');
