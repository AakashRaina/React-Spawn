const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");
const CompressionPlugin = require("compression-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require("path");

const webpackConfig = (env) =>
  merge.smart({ mode: env.mode }, webpackBaseConfig(), envConfig(env));

const envConfig = ({ mode }) =>
  mode === "development" ? webpackDevConfig() : webpackProdConfig();

const webpackBaseConfig = (_) => {
  return {
    entry: "./src/js/index.js",
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.(png|jpg|svg)$/i,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      extensions: [".js", ".jsx", ".json", ".css", ".styl"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
      }),
    ],
  };
};

const webpackDevConfig = (_) => {
  return {
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js",
    },
    module: {
      rules: [
        {
          test: /\.(styl|css)$/i,
          use: ["style-loader", "css-loader", "stylus-loader"],
        },
      ],
    },
    plugins: [
      new WebpackBar({
        color: "yellowgreen",
      }),
      new ErrorOverlayPlugin(),
    ],
    devServer: {
      port: 5000,
      compress: true,
    },
    devtool: "eval-source-map",
  };
};

const webpackProdConfig = (_) => {
  return {
    // contenthash doesn't work with hot-mdoule-replacement,
    // so using hash in dev and contenthash in prod
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.(styl|css)$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css",
      }),
      new CompressionPlugin({
        test: /\.(js|css)$/,
      }),
    ],
    optimization: {
      // To split runtime code into a separate chunk ~ ideally for code-splitting
      runtimeChunk: "single",
      // To keep vendor bundles hash consistent between builds
      moduleIds: "hashed",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: true,
          extractComments: false,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new OptimizeCssAssetsPlugin({}),
      ],
    },
    devtool: "hidden-source-map",
  };
};

module.exports = webpackConfig;
