const joi = require('joi');

module.exports = joi.object({
  api_origin: joi.string().required(),
  web_origin: joi.string().required(),
});
