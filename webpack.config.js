const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module:{
    rules:[
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             }
     ]
  }
};