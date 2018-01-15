const {DefinePlugin} = require("webpack");
const {resolve} = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    /**
     * [filename Name of the result file. May contain [name], [id] and [contenthash]]
     * @type {String}
     */
    filename: './c/[name].css',
    /**
     * [allChunks Extract from all additional chunks too
     *  (by default it extracts only from the initial chunk(s)) When using
     *  CommonsChunkPlugin and there are extracted chunks
     *  (from ExtractTextPlugin.extract) in the commons chunk, allChunks
     *  must be set to true]
     * @type {Boolean}
     */
    allChunks: true,
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  // devtool: "source-map",
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
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader", // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            })
        },
      {
        test: /.jsx?$/,
        include: [resolve('app')],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', resolve('app'),]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './c/[name].css',
      allChunks: true
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
} 