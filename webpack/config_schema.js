const joi = require('joi');

module.exports = joi.object({
  server_origin: joi.string().required(), // Server 源, 例如 https://api.mebtte.com
  pwa_origin: joi.string().required(), // PWA 源, 例如 https://cicada.mebtte.com
  github_repository: joi.string().required(), // Github 仓库, 例如 https://github.com/mebtte/cicada_pwa
});
