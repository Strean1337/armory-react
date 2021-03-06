const path = require('path');

function resolve (relativePath) {
  return path.resolve(__dirname, relativePath);
}

module.exports = {
  appBuild: resolve('../dist'),
  appHtml: resolve('../src/index.html'),
  appPackageJson: resolve('../package.json'),
  appSrc: resolve('../src'),
  appNodeModules: resolve('../node_modules'),
  ownNodeModules: resolve('../node_modules'),
};
