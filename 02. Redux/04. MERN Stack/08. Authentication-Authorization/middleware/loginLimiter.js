// https://www.npmjs.com/package/express-rate-limit
// https://express-rate-limit.mintlify.app/overview
const rateLimit = require('express-rate-limit');
const logEvents = require('./logger');

const loginLimiter = rateLimit({
  // windowMs: 15 * 60 * 1000, // 15 minutes
  // limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  windowMs: 60 * 1000, // 1 minute
  limit: 5, // Limit each IP to 5 login requests per `window` per minute
  message: {
    message:
      'Too many login attempts from this IP, please try again after a 60 second pause',
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      'errLog.log'
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

module.exports = loginLimiter;
