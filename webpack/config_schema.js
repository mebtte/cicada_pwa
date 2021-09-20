const joi = require('joi');

module.exports = joi.object({
  server_origin: joi.string().required(), // Server 源, 例如 https://api.mebtte.com
  sentry_dsn: joi.string().optional(), // Sentry DSN
});
