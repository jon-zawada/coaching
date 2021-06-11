const path = require('path');

const DIST_DIR = path.join(__dirname, 'client', 'dist');
const SRC_DIR = path.join(__dirname, 'client', 'src', 'index.jsx');

module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
