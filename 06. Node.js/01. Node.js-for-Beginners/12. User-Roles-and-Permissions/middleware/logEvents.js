const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('node:fs/promises');
const path = require('node:path');

const logEvents = async (message, fileName) => {
  const dateTime = format(new Date(), 'yyyy/MM/dd\tHH:mm:ss');
  const logItem = `${dateTime}\t${uuid()}\t${message}`;

  try {
    const dir = path.join(__dirname, '..', 'logs');
    if (!fs.existsSync(dir)) {
      await fsPromises.mkdir(dir);
    }

    const filePath = path.join(__dirname, '..', 'logs', fileName);
    await fsPromises.appendFile(filePath, `${logItem}\n`);
  } catch (error) {
    console.error(error);
  }
};

const logger = (req, res, next) => {
  const message = `${req.method}\t${req.headers.origin}\t${req.url}`;
  const fileName = 'requestLog.txt';
  logEvents(message, fileName);
  next();
};

module.exports = {
  logger,
  logEvents,
};
