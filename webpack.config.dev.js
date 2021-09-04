const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  ...require("./webpack.config.prod"),
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    globalObject: "self",
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
  },
  watchOptions: {
    ignored: ["/node_modules/"],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: "doctari test project",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/data"),
          to: "data",
        },
      ],
    }),
  ],
  optimization: {},
};
