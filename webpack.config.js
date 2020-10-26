module.exports = {
  entry: './src/index.js',

  output: {
    filename: "main.js"
  },

  mode: "development",

  devServer: {
    contentBase: "dist",
    open: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  target: ["web", "es5"],
};
