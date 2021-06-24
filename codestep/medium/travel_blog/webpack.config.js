// pathモジュールの読み込み
const path = require("path");
// mini-css-extract-pluginモジュールの読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// htmlファイルを生成。読み込んだjs, cssファイルも読み込まれる
const HtmlWebpackPlugin = require("html-webpack-plugin");
// clean-webpack-pluginモジュールの読み込み
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "source-map",
  //  エントリポイント
  entry: {
    index: "./src/javascripts/index.js",
  },
  // アウトプット先
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "javascripts/[name]-[contenthash].js",
    publicPath: "./",
  },
  // モジュール設定
  module: {
    rules: [
      {
        // js section
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // pluginが束になったもの
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "> 0.25%, not dead", // 対象ブラウザを指定
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        // css section
        test: /\.(css|scss|sass)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // jsファイルに読み込まれたcssを別ファイルに切り離す
          },
          {
            loader: "css-loader", // cssファイルを読み込む
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader", // sassファイルを読み込み、cssへコンパイルする
          },
        ],
      },
      {
        // image section
        test: /\.(png|jpe?g)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[contenthash][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/[name]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "src/templates/index.html",
      filename: "index.html",
    }),
    // 自動生成されるファイル以外の不要ファイルを削除(outputで指定したディレクトリ配下を対象とする)
    new CleanWebpackPlugin(),
  ],
};
