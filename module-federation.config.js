// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  // A workspace library for a publish/subscribe
  // system of communication.
  '@acme/pub-sub',
]);

const sharedLibraries = new Set([
  '@portal/common-context',
]);

module.exports = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      console.warn('the name:', libraryName, ' conf: ',defaultConfig)
      return defaultConfig;
    }

    if (sharedLibraries.has(libraryName)) {
      console.warn('the name:', libraryName, ' singleton import')
      return {
        "singleton": true,
        "import": "libs/common-context/src/index.ts"
      }
    }

    // Returning false means the library is not shared.
    return false;
  },
};
