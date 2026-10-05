const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('node:fs/promises');
const path = require('node:path');

const logEvents = async (message) => {
  const dateTime = format(new Date(), 'yyyy/MM/dd\tHH:mm:ss');
  const logItem = `${dateTime}\t${uuid()}\t${message}`;

  console.log(logItem);
  try {
    const dir = path.join(__dirname, 'logs');
    if (!fs.existsSync(dir)) {
      await fsPromises.mkdir(dir);
    }

    const filePath = path.join(__dirname, 'logs', 'eventLogs.txt');
    await fsPromises.appendFile(filePath, `${logItem}\n`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;
