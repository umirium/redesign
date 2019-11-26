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
      maxSize: 200 * 1024,
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
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "[name].[ext]",
            outputPath: './webfonts',
            publicPath: '../webfonts',
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100 * 1024,
            name: '[name].[ext]',
          }
        }]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'chunk-[id].css',
    })
  ],
  performance: {
    hints: 'warning'
  }
}
