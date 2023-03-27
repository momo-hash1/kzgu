const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const currPage = "index";

module.exports = {
  entry: `./src/${currPage}.js`,
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(jpg|svg|png)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name][ext]'
        },
      },
      {
        test: /\.scss$/i,
        use: ["sass-loader"],
        type: 'asset/resource',
        generator: {
          filename: 'css/[name].css'
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/${currPage}.html`,
    }),
  ],
};
