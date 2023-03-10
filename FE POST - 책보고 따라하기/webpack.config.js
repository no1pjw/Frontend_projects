// Generated using webpack-cli https://github.com/webpack/webpack-cli
const developmentConfig = require('./webpack.dev.config');
const productionConfig = require('./webpack.prod.config');

module.exports = (env, {mode}) => {
  return mode === 'production' ? productionConfig : developmentConfig;
};
