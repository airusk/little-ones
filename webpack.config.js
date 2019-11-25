const path = require('path');

module.exports = {
  // tell webpack where entry point file lives
  entry: './javascripts/main.js', //this is assuming that we have a frontend folder that has the entry file

  // tell webpack where to output bundled js file
  output: {
    // use path module to get absolute path to current directory (2 underscores)
    path: path.resolve(__dirname, "javascripts"),
    filename: './bundle.js'
  },
  // lets us debug in js files we wrote instead of bundled webpack file
  devtool: 'source-map',
  // sets up babel to transpile ES6/React code to ES5, browser-compatible code
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env']
          }
        },
      }
    ]
  },
  // allows us to drop .js or .jsx when importing files
  resolve: {
    extensions: ['.js', '*']
  }
}