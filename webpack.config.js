// 以下、参照

// 【webpack 4】環境構築からJSとCSSを別出力まで（備忘録） – expexp.jp
// https://www.expexp.jp/webpack/

// webpackでMaterializeを使うにあたりハマったこと - Qiita
// https://qiita.com/usk83/items/a06d7a6080c7f2b7ef0a

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // モードの設定
  mode: 'development',
  // mode: 'production',
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
    }
  },
  // ローダの設定
  module: {
    // babel-loaderの設定
    rules: [
      {
        test: /\.js$/,
        use: [
          {
          loader: 'babel-loader',
          options: {
            presets: [
            '@babel/preset-env'
            ]
          }
          }
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ],
  performance: {
    hints: 'warning'
  }
}
