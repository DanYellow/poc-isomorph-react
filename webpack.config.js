const path = require('path');

module.exports = {
  entry: './application/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=8192', include: __dirname  }
    ]
  }
};
