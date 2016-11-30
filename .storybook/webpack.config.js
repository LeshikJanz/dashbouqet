const path = require('path');

module.exports = {

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

    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      src: path.resolve('./src'),
    },
  }

};