const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: path.join(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
        {
          test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve("url-loader"),
          options: {
            limit: 10000,
            name: "static/media/[name].[hash:8].[ext]"
          }
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          enforce:"pre",
          test:/\.js?$/,
          loader:"source-map-loader"
        },
        {
          test: /\.scss$/,
          use: [ 
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
              "sass-loader"
            ]
          
        }
        
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devtool:"source-map",
  resolve:{
    extensions:[".js",".ts",".tsx"]
  }
};