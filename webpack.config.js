const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|css)$/,
        loader: 'style!css!sass',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader:'json-loader',
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, 'client'),
    extensions: [
      '',
      '.js',
      '.jsx',
      '.sass',
      '.css',
    ],
  }
}
