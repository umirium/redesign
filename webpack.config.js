// 以下、参照

// webpackでMaterializeを使うにあたりハマったこと - Qiita
// https://qiita.com/usk83/items/a06d7a6080c7f2b7ef0a

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      name: 'vendor',
      chunks: 'initial',
    }
  },
  // config webpack-dev-server
  devServer: {
    open: true, // 自動でブラウザを開く
    host: '0.0.0.0',
    // port: 80,
  },
  module: {
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
            publicPath: './webfonts',
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
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'chunk-[id].css',
    }),
  ],
  performance: {
    hints: 'warning'
  }
}
