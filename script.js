// ==========================================================
// This file has two small jobs. Both wait for the page's
// HTML to finish loading before they run, using the
// "DOMContentLoaded" event — this avoids errors from trying
// to grab an element that doesn't exist on the page yet.
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

  // ---- Job 1: toggle the mobile menu open/closed ----
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close the mobile menu automatically after clicking a link,
  // so the menu doesn't stay open once you've navigated.
  var links = navLinks.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", false);
    });
  });

  // ---- Job 2: fill in the current year in the footer ----
  document.getElementById("year").textContent = new Date().getFullYear();

});
