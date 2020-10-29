const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: './src/main.ts',
  output: {
    filename: "main.js"
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
        test: /\.css/,
        use: [
          "style-loader",
        {
          loader: "css-loader",
          options: {
            url: false,
            sourceMap: enabledSourceMap
          }
        }
        ]
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
};
