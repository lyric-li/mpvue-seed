var merge = require('webpack-merge')
var prodEnv = require('./release.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"https://mpvue-seed.com/alpha"'
})
