var path = require('path')

var pkg = {}

try {
  pkg = require(path.resolve(process.cwd(), 'package.json'))
} catch (err) {}

var config = Object.assign({
  browsers: ['ie > 9', 'last 2 versions'],
  out: './theme',
  config: './element-variables.scss',
  theme: 'element-theme-chalk',
  minimize: false
}, pkg['element-theme'])

var themePathConfig = config.theme.indexOf('/') >= 0 ? config.theme : './node_modules/' + config.theme

exports.themePath = path.resolve(process.cwd(), themePathConfig)
exports.out = config.out
exports.config = config.config
exports.minimize = config.minimize
exports.browsers = config.browsers
exports.components = config.components
exports.themeName = config.theme
