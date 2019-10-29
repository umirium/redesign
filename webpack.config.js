// 以下、参照

// webpackでMaterializeを使うにあたりハマったこと - Qiita
// https://qiita.com/usk83/items/a06d7a6080c7f2b7ef0a

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  }
}
