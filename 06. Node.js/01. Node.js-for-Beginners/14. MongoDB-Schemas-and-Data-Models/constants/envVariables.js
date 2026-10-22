const isDevelopment = globalThis.process.env.NODE_ENV === 'development';

const ENV_VARIABLES = {
  port: globalThis.process.env.PORT || 3000,
};

module.exports = { ENV_VARIABLES, isDevelopment };
