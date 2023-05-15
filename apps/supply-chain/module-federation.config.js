const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'supply-chain',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
