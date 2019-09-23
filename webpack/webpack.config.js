const webpack = require('webpack');
const path     = require('path');

const config = {
  entry: {
    // demo1: './demo/index.js',
    // demo2: './demo/index2.js',
    demo3: './demo/index3.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'lib'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 0,
      minChunks: 5,
    }
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require('./demo/manifest.json')
    }),
  ]
};

module.exports = config;
