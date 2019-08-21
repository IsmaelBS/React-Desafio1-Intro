const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 8081
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
        test: /\.(png|gif|jpe?g|svg)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
