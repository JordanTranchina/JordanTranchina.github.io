document.getElementById('hamburger').addEventListener("click", mobileMenu(x));
// return to grab by class not by id
document.getElementById('nav_tab_about').addEventListener("click", mobileMenu(x));
document.getElementById('nav_tab_work').addEventListener("click", mobileMenu(x));
document.getElementById('nav_tab_skills').addEventListener("click", mobileMenu(x));
document.getElementById('nav_tab_about').addEventListener("click", mobileMenu(x));


function mobileMenu(x) {
  x.classList.toggle("active");
  document.getElementById("overlay").classList.toggle("open");
  // improve by grabing by class not by id
  document.getElementById("nav_tab_about").classList.toggle("open");
  document.getElementById("nav_tab_work").classList.toggle("open");
  document.getElementById("nav_tab_skills").classList.toggle("open");
  document.getElementById("nav_tab_contact").classList.toggle("open");
}