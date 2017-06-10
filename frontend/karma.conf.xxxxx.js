module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    files: [
      'js/hoge*.js',
      'node_modules/chai/chai.js',
      'spec/**/*.spec.js',
    ],
    reporters: ['mocha'],
  });
};
