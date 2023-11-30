const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const allowedOrigins = require('../config/allowedOrigins');

const logEvents = async (message, logFileName) => {
  const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    // If the file doesn't exist it's going to create it
    if (fs.existsSync(path.join(__dirname, '..', 'logs')) == false) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    await fsPromises.appendFile(
      path.join(__dirname, '..', 'logs', logFileName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

const logger = (req, res, next) => {
  if (allowedOrigins.includes(req.headers.origin) == false) {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
  }
  // Expected output in log file
  // 20231130	18:10:20	416ada9a-080c-4e8f-a379-bc9f79563046	OPTIONS	/auth/refresh	http://localhost:3000
  // 20231130	18:10:20	df9ae2cf-7365-41cc-9682-4b11deb9f286	GET	/auth/refresh	http://localhost:3000
  // 20231130	18:10:21	9489815c-8263-421a-808e-be0943264bb3	OPTIONS	/notes	http://localhost:3000

  console.log(`<< ${req.method} ${req.path}`);
  next();
};

module.exports = { logEvents, logger };
