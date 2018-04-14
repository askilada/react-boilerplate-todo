const { CheckerPlugin } = require('awesome-typescript-loader')
const { join, resolve } = require('path')

module.exports = {
    mode: "development",
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist', 'js'),
        
        filename: 'bundle.js'
    },
    

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [resolve(__dirname, "src"), "node_modules"]

  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
      new CheckerPlugin()
  ],
  devServer: {
    contentBase: join(__dirname, "dist"),
    publicPath: resolve(__dirname, 'js')
  }
};