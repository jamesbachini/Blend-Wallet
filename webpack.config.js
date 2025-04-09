const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // Change to 'development' for debugging
};