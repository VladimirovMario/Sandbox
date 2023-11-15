const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

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
  // // Todo make this conditional
  // logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log');
  // // Expected output in log file
  // // 20231115	15:53:51	fc52e050-056c-46a5-9347-8e37a92f270b	GET	/	undefined
  // // 20231115	15:53:51	83183666-8975-414e-9515-07e51a550159	GET	/css/style.css	undefined

  console.log(`<< ${req.method} ${req.path}`);
  next();
};

module.exports = { logEvents, logger };
