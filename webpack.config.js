const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const getPages = () => {
  let pages = [];
  fs.readdirSync(join(__dirname, "public")).forEach((x) => {
    if (fs.lstatSync(join(__dirname, "public", x)).isDirectory()) {
      return;
    }
    pages.push(x.split(".")[0]);
  });
  return pages;
};

const getPageJs =  () => {
  const pages = {}
  getPages().forEach(page => {
    if (fs.existsSync(join(__dirname, "src", `${page}.js`))){
      pages[page] = `./src/${page}.js`;
    };
  })
  return pages
}

module.exports = {
  entry: getPageJs(),
  mode: true ? "development" : "production",
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(jpg|svg|png)$/i,
        type: "asset/resource",
        generator: {
          filename: "media/[name][ext]",
        },
      },
      {
        test: /\.scss$/i,
        use: ["sass-loader"],
        type: "asset/resource",
        generator: {
          filename: "css/[name].css",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { url: true } },
        ],
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
  plugins: [].concat(
    getPages().map((page) => {
      return new HtmlWebpackPlugin({
        template: `./public/${page}.html`,
        filename: `${page}.html`,
        chunks: [page],
        inject: true,
      });
    })
  ),
};
