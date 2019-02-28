document.getElementById('hamburger').addEventListener("click", myFunction(x));

function myFunction(x) {
  x.classList.toggle("active");
  document.getElementById("overlay").classList.toggle("open");
}
