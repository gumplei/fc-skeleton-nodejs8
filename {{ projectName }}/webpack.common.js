const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: "./src/index.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve("src"), resolve("test")],
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
