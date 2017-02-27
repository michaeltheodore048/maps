var webpack = require("webpack")

var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWbpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/view/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/client.js',
  output: {
    filename: 'bundle.js',
    path: __dirname 
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: {
            presets: ['react', 'es2015']
          }
        }
      ],
  },
  plugins: [
    HTMLWbpackPluginConfig
  ]

}
