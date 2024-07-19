let defaultTransform = 0;
function goNext() {
  defaultTransform = defaultTransform - 398;
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
  var slider = document.getElementById("slider");
  if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
  else defaultTransform = defaultTransform + 398;
  slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showitems() {
  let navItems = document.getElementById('navItems');
  navItems.style.display = "block";
  let bars = document.getElementById('bars');
  bars.style.display = 'none'
  let hideItems = document.getElementById('hideItems');
  hideItems.style.display = 'block'

}
function hideItems() {
  let navItems = document.getElementById('navItems')
  navItems.style.display = "none";
  let bars = document.getElementById('bars');
  bars.style.display = 'block'
  let hideItems = document.getElementById('hideItems');
  hideItems.style.display = 'none'




}


const login_text = document.getElementById('login_text')
const email = localStorage.getItem('email')
login_text.textContent = email
login_text.href= "#"