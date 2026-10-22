const isDevelopment = globalThis.process.env.NODE_ENV === 'development';

const ENV_VARIABLES = {
  port: globalThis.process.env.PORT || 3000,
  accessTokenSecret: globalThis.process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: globalThis.process.env.REFRESH_TOKEN_SECRET,
};

module.exports = { ENV_VARIABLES, isDevelopment };
