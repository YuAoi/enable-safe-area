(function() {
  if (
    window.CSS &&
    typeof CSS.supports === 'function'
  ) {
    var CSSFunc;
    if (CSS.supports('padding-bottom: env(safe-area-inset-bottom)')) {
      CSSFunc = 'env'
    } else if (CSS.supports('padding-bottom: constant(safe-area-inset-bottom)')) {
      CSSFunc = 'constant'
    } else {
      return false;
    }
    var doc = document.documentElement;
    var div = document.createElement('div');
    div.style.paddingTop = CSSFunc + '(safe-area-inset-top)';
    div.style.paddingBottom = CSSFunc + '(safe-area-inset-bottom)';
    document.body.appendChild(div);
    var calculatedPaddingTop = parseInt(window.getComputedStyle(div).paddingTop);
    var calculatedPaddingBottom =  parseInt(window.getComputedStyle(div).paddingBottom);
    document.body.removeChild(div);
    if (calculatedPaddingTop > 0 || calculatedPaddingBottom > 0) {
      doc.setAttribute('enable-safe-area', '');
    }
  }
})();
