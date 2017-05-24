var path = require('path');
var webpack = require('webpack');

var NpmInstallPlugin = require('npm-install-webpack-plugin');


var environnementVars = {
  NODE_ENV: JSON.stringify("development"),
  BROWSER: JSON.stringify(true)
}

var clientConfig =  {
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  entry: './application/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=8192', include: __dirname  }
    ]
  },
  plugins: [
    new NpmInstallPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map'
    }),
    new webpack.DefinePlugin(environnementVars)
  ],
};


// var serverConfig = {
//   target: 'node',
//   entry: './server/index.js',
//   output: {

//     path: path.resolve(__dirname, 'server'),
//     filename: 'lib.node.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
//       { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=8192', include: __dirname  }
//     ]
//   },
//   plugins: [
//     new NpmInstallPlugin(),
//   ]

// };

module.exports = [  clientConfig ];