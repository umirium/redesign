window.jQuery = window.$ = require('jquery');

import './scss/style.scss'
require('materialize-css')

// Webフォント読み込み
import {
  loadFonts
} from "./javascript/fonts.js"
loadFonts();

$(() => {
    // Materialize componentsの初期化
    $('.fixed-action-btn').floatingActionButton()
    $('.sidenav').sidenav()
    $('.parallax').parallax()
    $('.slider').slider()

    // NOTE: Ajaxを用いてDBより一覧取得
    // 参考: https://stackoverflow.com/questions/39883425/materialize-autocomplete-with-dynamic-data-in-jquery-ajax}}
    $('#mobile-search').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
        "塩尻ワインセット": null,
      },
    })

    $('.collapsible').collapsible()
})

// ヘッダを下スクロールで隠す処理
let startPos = 0
let winScrollTop = 0
$(window).on('scroll', e => {
  winScrollTop = $(e.currentTarget).scrollTop()

  if (winScrollTop >= startPos) {
    if (winScrollTop >= 150) {
      $('#navbar').addClass('hide-animation')
    }
  } else {
    $('#navbar').removeClass('hide-animation')
  }
  startPos = winScrollTop
})
