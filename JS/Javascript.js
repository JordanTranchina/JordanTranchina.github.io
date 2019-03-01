document.getElementById('hamburger').addEventListener("click", mobileMenu(x));

function mobileMenu(x) {
  x.classList.toggle("active");
  document.getElementById("overlay").classList.toggle("open");
}

function mobileDisplay() {
    document.getElementById("overlay").classList.toggle("open");
}
