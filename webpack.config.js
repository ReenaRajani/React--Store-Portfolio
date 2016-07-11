var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: './src',
  entry: [
  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './main.js' // appʼs entry point
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },

  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx', '.json', '.coffee'] 
  },

  resolveLoader: {
  root: path.join(__dirname, 'node_modules')
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader'] },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, include: './src', loader: 'style-loader!css-loader!postcss-loader' },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },

      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },

  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}