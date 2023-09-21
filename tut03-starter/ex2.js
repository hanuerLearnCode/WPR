/*
 * Capitalizing text of all paragraphs
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    // accessing DOM
    let paragraphs = document.querySelectorAll('p'); // return a list
    let content = "";
    // loop thr the list of paragraphs
    for (let i = 0; i < paragraphs.length; i++) {
      let paragraph = paragraphs[i]; // accessing each one
      // uppercase
      content = paragraph.textContent.toLocaleUpperCase();
      // changing the content in the paragraphs to the uppercase one
      paragraph.textContent = content;
    }  
  }

})();