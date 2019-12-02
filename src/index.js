window.jQuery = window.$ = require('jquery');

import './scss/style.scss'
require('materialize-css')

// Webフォント読み込み
import {
  loadFonts
} from "./javascript/fonts.js"
loadFonts();

$(() => {
    $('.fixed-action-btn').floatingActionButton()
    $('.sidenav').sidenav()
})
