module.exports = {
  entry: './src/index.js',

  output: {
    filename: "main.js"
  },

  mode: "development",

  devServer: {
    contentBase: "dist",
    open: true
  }
};