const joi = require('joi');

module.exports = joi.object({
  api_origin: joi.string().required(),
  pwa_origin: joi.string().required(),
  github_repository: joi.string().required(),
});
