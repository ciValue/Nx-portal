const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'host',
  remotes: ['insights', 'supply-chain'],
};
