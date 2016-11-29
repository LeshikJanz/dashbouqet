var HtmlWebpackPlugin = require('html-webpack-plugin');
var IgnorePlugin = require('webpack').IgnorePlugin;

module.exports = {

  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },

  module: {
    loaders: [

      // load and compile javascript
      { test: /\.js$/, exclude: /node_modules/, loader:"babel" },

      // load css and process less
      { test: /\.css$/, loader: "style!css"},

      // load sass
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },

      // load JSON files and HTML
      { test: /\.json$/, loader: "json" },
      { test: /\.html$/, exclude: /node_modules/, loader:"html" },

      // load fonts(inline base64 URLs for <=8k)
      { test: /\.(ttf|eot|svg|otf)$/, loader: "file" },
      { test: /\.woff(2)?$/, loader: "file-loader?lminetype=application/font-woff" },

      // load images (inline base64 URLs for <=8k images)
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=img/[name].[ext]'}
      
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },

  htmlLoader: {
    minimize: true,
    removeAttributeQuotes: false,
    removeEmptyElements: false,
    removeEmptyAttributes: false,
    caseSensitive: true,
    customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
    customAttrAssign: [ /\)?\]?=/ ]
  },

  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    vertx: "empty"
  },

  externals: [
    {
      './cptable': 'var cptable'
    },
    {
      './jszip': 'jszip'
    }
  ],

  // inject js bundle to index.html
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: false
    }),
    new IgnorePlugin(/vertx/)
  ],

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    noInfo: false,
    hot: true
  }

  // support source maps
  //devtool: "#inline-source-map"
};