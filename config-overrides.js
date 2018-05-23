const rewired = require('react-app-rewired')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireEslint = require('react-app-rewire-eslint')

function rewire(config, env) {
  config = injectBabelPlugin('transform-decorators-legacy', config)

  const cssLoader = rewired.getLoader(
    config.module.rules,
    rule => rule.test && String(rule.test) === String(/\.css$/)
  )

  const sassLoader = {
    test: /\.scss$/,
    use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
  }

  const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf
  oneOf.unshift(sassLoader)

  config = rewireLess(config, env)
  config = rewireEslint(config, env)
  return config
}

module.exports = rewire
