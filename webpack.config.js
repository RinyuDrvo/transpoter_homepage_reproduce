module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: "main.js"
  },
  devServer: {
    contentBase: "dist",
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
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};
