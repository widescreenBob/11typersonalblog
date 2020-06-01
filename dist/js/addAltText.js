(function () {
  'use strict';

  var $smallImage = document.getElementsByClassName('button homepage__illustration-button');

  for (var i = 0; i < $smallImage.length; i++) {
    var closestImg = $smallImage[i].querySelectorAll('.homepage__illustration-image--small')[0];
    var altText = $smallImage[i].dataset.modalAlt;
    closestImg.setAttribute('alt', altText);
  }
})();
//# sourceMappingURL=addAltText.js.map
