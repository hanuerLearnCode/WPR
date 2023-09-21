/**
 * JS for blog post section exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addEntry);
  }

  /**
   * Number of entry added
   */
  let numberOfEntries = 0;
  /**
   * TODO
   * adds a blog entry to the blog post page
   */
  function addEntry() {
    /** 
     * value of input
     */
    let date = id('date').value;
    let entry = id('entry').value;

    /**
     * Post section Node
     */
    let postSection = id('posts');

    /**
     * Post container
     */
    let postContainer = gen('div');
    postContainer.setAttribute('id', 'postContainer');
    /** 
     * 3rd level heading
     */
    let h3 = gen('h3');
    h3.setAttribute('id', 'heading');
    h3.textContent = "Date: " + date;
    /** 
     * paragraph with class "post"
     */
    let para = gen('p');
    para.setAttribute('class', 'post');
    para.setAttribute('id', 'paraEntry')
    para.textContent = "Entry: " + entry;
    
    // add to postContainer
    postContainer.appendChild(h3);
    postContainer.appendChild(para);

    // add postContainer to postSection
    postSection.appendChild(postContainer);

    // update number of entries
    numberOfEntries++;
    // if it === 3
    if (numberOfEntries === 3) {
      // disable the add entry button
      qs('button').disabled = true;
    }

    // deleting posts
    postContainer.addEventListener('dblclick', function() {
      /** targeted post */
      postContainer.remove();
      // update number of entries
      numberOfEntries--;
      console.log(numberOfEntries);
      if (numberOfEntries < 3) {
        // enable entry button
        qs('button').disabled = false;
      } 
      if (numberOfEntries < 0 ) {
        qs('button').disabled = true;
      }
    });
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
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
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} a DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();