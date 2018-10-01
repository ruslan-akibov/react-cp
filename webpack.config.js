const path = require('path');

module.exports = {
  mode: 'development', // 'production' 'development'
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve('./app'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './app',
    port: '80'
  }
};