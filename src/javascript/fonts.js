// Webフォント読み込み
export function loadFonts() {
  // Web Font Loaderを使用して非同期でフォントを読み込む
  window.WebFontConfig = {
    google: {
      families: ['Noto+Sans+JP', 'Material+Icons']
    },
  }

  $(() => {
    var wf = document.createElement('script')
    wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
    wf.type = 'text/javascript'
    wf.async = 'true'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(wf, s)

    // ２秒経過してもWebフォントが読み込めない場合は強制的にページを表示する
    setTimeout(() => {
      document.getElementsByTagName("html")[0].classList.add("wf-delay")
    }, 2000)
  })
}
