var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      devtool: 'eval-source-map',
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
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      }
    },
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
    ],
    reporters: ['progress'],
    colors: true,
    browsers: ['Chrome'],
    autoWatch: true,
  })
};
