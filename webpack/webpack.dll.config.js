const path     = require('path')
const webpack  = require('webpack')
const vendors = require('./demo/vendor');

module.exports = {
  entry: {
    vendor: vendors,
  },

  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
  },

  plugins: [
    new webpack.DllPlugin({
      context: process.cwd(),
      name: '[name]_[hash]',
      path: path.join(__dirname, 'demo/manifest.json'),
    })
  ]
}
