# Simple React webpack Typescript boilerplate

A ready to use simple React webpack Typescript boilerplate.

## Instructions

1.  Clone this repo
2.  Run `npm install`
3.  Run `npm start`, **localhost:8080** will open up in your default browser

**If you prefer to install things yourself you can follow the instructions below**

1.  Run `npm init` and type your answers to the questions or you can run `npm init -y` to say yes to every question - you will get default settings
2.  Install the following dependencies:
```
npm install --save react react-dom
```
3.  Install the following dev dependencies:
```
npm install --save-dev webpack webpack-dev-server webpack-cli

npm install --save-dev @babel/core babel-loader @babel/preset-react   @babel/preset-env @babel/plugin-proposal-class-properties

npm install --save-dev html-webpack-plugin

npm install --save-dev url-loader css-loader style-loader file-loader

```
4. Update your scripts to the following:
```
"start": "webpack-dev-server --mode development --open",
"build": "webpack --mode production"
```
5. Create **.babelrc** file with the following configurations:
```
{
    "presets": ["@babel/preset-env","@babel/preset-react"],
    "plugins": [["@babel/plugin-proposal-class-properties",
    {"loose":true}]]
}

```
5. Create **webpack.config.js** file with the following configurations:
```

    const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html")
    })
  ]
};

```
7. Create **src** folder with **index.js** and **index.html** file.
8. **index.js** should have:
```
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
```
9. **index.html** should have:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React with Webpack</title>
</head>
<body>
  <section id="root"></section>
</body>
</html>
```
10. Create **.gitignore** file and input **/node_modules/** and **/dist**.