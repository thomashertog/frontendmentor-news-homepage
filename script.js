function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(document.getElementById("js-menu-button").addEventListener("click", function(event){
    toggleMenu();
  }));

  ready(document.getElementById("js-close-menu").addEventListener("click", function(event){
    toggleMenu();
  }));

  function toggleMenu(){
    document.querySelector('body').classList.toggle('with-overlay');
    const menuButton = document.querySelector('#js-menu-button');
    const expanded = menuButton.getAttribute("aria-expanded") === "true" ? true: false;
    menuButton.setAttribute('aria-expanded', !expanded);
  }