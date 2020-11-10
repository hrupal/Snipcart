import const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {
  const options = browserify.defaultOptions;  
  options.browserifyOptions.plugin.unshift(['tsify', {project: '../uiTests/tsconfig.json'}]);  
  on("task", {
    failed: require("cypress-failed-log/src/failed")(),
  });
};
