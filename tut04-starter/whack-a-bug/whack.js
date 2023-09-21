/*
 * Whack a Bug Exercise
 * Handles whacking bugs.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up event listeners for the start button and the bugs.
   */
  function init() {
    let bugs = qsa("#bug-container img");
    for (let i = 0; i < bugs.length; i++) {
      bugs[i].addEventListener("click", whackBug);
    }
  } 


  /** number of whacked bugs */
  let score = 0;

  /**
   * TODO
   * whacks the clicked bug and increments the score. The bug cannot be whacked again afterwards.
   */
  function whackBug() {
    // your code goes here
    // where to update score
    let span = id('score');
    // finishing text 
    let para = qs('p');
    // point to the clicked bug
    let bug = event.target;
    // if the bug has not been whacked
    if (!bug.classList.contains('whacked')) {
      // change the src of the img
      bug.src = 'bug-whacked.png';
      // add class 'whacked'
      bug.classList.add('whacked');
      // update score
      score++;
      // print score
      span.innerText = score;
      // if finish
      if (score === 24) {
        // print finishing text
        para.innerText = "All bugs have been whacked!";
      }
    }
    
  }

  /* --- HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
