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
    $('.fixed-action-btn').floatingActionButton({
      hoverEnabled: false,
    })
    $('.sidenav').sidenav()
    $('.parallax').parallax()
    $('.slider').slider()
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
