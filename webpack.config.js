const path = require("path");
const TsConfigWebpackPlugin = require('ts-config-webpack-plugin');

module.exports = {
  target: "electron-renderer",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist/")
  },
  plugins: [new TsConfigWebpackPlugin()]
};
