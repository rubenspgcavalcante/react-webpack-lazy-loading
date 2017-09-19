const {DefinePlugin} = require("webpack");
const {resolve} = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    app: resolve(__dirname, "app/App.js")
  },
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: process.env.NODE_ENV === 'development' ? "/dist/" : "/react-webpack-lazy-loading/dist/"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [resolve('app')],
        loader: 'babel-loader'
      },
      {
        test: /.(sass|scss)$/,
        include: [resolve('app')],
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', resolve('app'),]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
} 