const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/lib/',
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
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
        include: path.resolve(__dirname, 'img/'),
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: [
      '',
      '.js',
      '.jsx',
      '.sass',
      '.css',
    ],
  }
}
