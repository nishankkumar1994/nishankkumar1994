var webpack = require('webpack')

module.exports = {
  entry: "./src/scripts",
  output: {
    publicPath: "/dist/scripts/",
    path: __dirname + "/dist/scripts",
    filename: "bundle.js"
  },
  devServer: {
      historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: "/node_modules",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        exclude: "/node_modules"
      },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: 'url-loader',
        use: 'file-loader?name=./public/img/[name].[ext]'
        // options: {
        //   name: 'images/[name]-[hash].[ext]'
        // }
      }




    ]
  }
}
