const path = require('path');

module.exports = {
  entry: 'D:/OneDrive/Documents/GitHub/BrainTrek/src/components/Lander.js',
  output: {
    path: path.resolve(__dirname, 'static/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};