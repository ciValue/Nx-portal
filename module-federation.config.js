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

const sharedLibraries = {
  '@portal/common-context' : "libs/common-context/src/index.ts"
}

module.exports = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    if (Object.keys(sharedLibraries).includes(libraryName)) {
      //console.warn('the name:', libraryName, ' singleton import')
      return {
        "singleton": true,
        "import": sharedLibraries[libraryName]
      }
    }

    // Returning false means the library is not shared.
    return false;
  },
};
