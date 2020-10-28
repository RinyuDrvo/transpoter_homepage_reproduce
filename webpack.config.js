const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
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
