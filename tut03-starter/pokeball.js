/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - setup the demo button to change the image on click.
   */
  function init() {
    // accessing DOM
    var btn = document.getElementById('demo-btn');
    var img = document.getElementById('pokeball');

    // addEventListener on btn
    btn.addEventListener("click", changeImgSrc);
    
    // changeImgSrc() 
    function changeImgSrc() {
      img.setAttribute('src', 'mystery.gif');
    }
  }

})();