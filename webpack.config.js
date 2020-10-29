const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PollingWatchKind, isJSDocPublicTag } = require('typescript');
const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: './src/main.ts',
  output: {
    filename: "main.js",
    path: path.join(__dirname, 'dist/asset')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              // sass-loaderを読み込む
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          },
        ]
      },
      {
        test: /\.(img|png|gif)$/,
        loader: 'url-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'), // パスの指定
    }),
  ],
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  target: ["web", "es5"]
};
