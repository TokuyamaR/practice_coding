// pathモジュールの読み込み
const path = require("path")
// mini-css-extract-pluginモジュールの読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// clean-webpack-pluginモジュールの読み込み
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  //  エントリポイント
  entry: './src/javascripts/index.js',
  // アウトプット先
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './javascripts/[name]-[contenthash].js'
  },
  // モジュール設定
  module: {
    rules: [
      {
        // js section

      },
      {
        // css section

      }
    ]

  },
  plugins: {

  }
}
