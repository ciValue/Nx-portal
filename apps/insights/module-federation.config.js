const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'insights',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
