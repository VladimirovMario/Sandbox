const { logEvents } = require('./logEvents');

// https://expressjs.com/en/5x/guide/error-handling/
const errorHandler = (err, req, res, next) => {
  const errorName = err.name;
  const errorMessage = err.message;
  const stack = err.stack;

  const stackLines = stack?.split('\n') ?? [];
  const errorLocation = stackLines[1]?.trim() ?? 'Unknown location';

  logEvents(`${errorName}: ${errorMessage}\t${errorLocation}`, 'errorLog.txt');

  res.status(500).json({ message: err.message });
};

module.exports = {
  errorHandler,
};
