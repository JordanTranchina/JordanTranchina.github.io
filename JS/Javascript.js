function mobileMenu() {
  document.getElementById("hamburger").classList.toggle("active"); // toggling active class
  document.body.classList.toggle("overlay-body"); //toggling overlay state on body
  document.getElementById("overlay").classList.toggle("open"); //toggling overlay state on nav by setting classlist to "open"
  // improve below by grabing by class not by id
  document.getElementById("nav_tab_about").classList.toggle("open");
  document.getElementById("nav_tab_work").classList.toggle("open");
  document.getElementById("nav_tab_skills").classList.toggle("open");
  document.getElementById("nav_tab_contact").classList.toggle("open");
}