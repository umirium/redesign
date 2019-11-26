import './scss/style.scss'
import './scss/test.scss'
require('materialize-css')

// Nuxt.js に Materialize を導入＆カスタマイズ - モンモンブログ
// https://monmon.hatenablog.com/entry/2019/04/22/011200

// 'url-loader' 100KB以上だったら埋め込まずファイルとして分離する
// https://github.com/ics-creative/170330_webpack/blob/master/tutorial-sass-image-url-limit/webpack.config.js

$(() => {
  // $("body").text("Body has been loaded, yeah.")
  let img = document.createElement('img');
  img.src = require('./assets/test.jpg');
  document.body.appendChild(img);
})
