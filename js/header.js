/**
 * 
 * 
 * method to select the element by id or class
 * 
 */

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
  }
  
  /**
   * Mobile Navigation view Function
   */
  
  const toggleMobileView = () => {
    debugger
    let x = select('#myTopnav')
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
  
  var splitBar = select('.icon')
  splitBar.addEventListener('click', toggleMobileView);
  
  let navbarlinks = select('#myTopnav .scrollto', true)
  navbarlinks.forEach(
    navbarlink => {
        navbarlink.addEventListener('click', toggleMobileView)
    }
  )