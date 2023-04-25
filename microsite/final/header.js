function menuFunction(nav){
  var allDark = document.getElementsByClassName("dark-toggle")
  for (var i=0; i < allDark.length; i++) 
  {    
    allDark[i].classList.remove("darkmode");
  }
  var sideNav = document.getElementById("side-nav");
  var sideButtons = document.getElementById("side-links").children;
  if (sideNav.style.width === "100%") {
    for (let i = 0; i < sideButtons.length; i++) {
      setTimeout(() => sideButtons[i].style.opacity = "0", 200 * (2-i));
    }
    var finalTime = (sideButtons.length)*200+200;
    setTimeout(() => sideNav.style.width = "0", finalTime);
    setTimeout(() => sideNav.style.opacity = "0", finalTime);
  }
  else {
    sideNav.style.width = "100%";
    sideNav.style.opacity = "100";
    for (let i = 0; i < sideButtons.length; i++) {
      setTimeout(() => sideButtons[i].style.opacity = "100", 600 + (200 * i));
    }
  }
  nav.classList.toggle("change");
}

var linkHover = document.getElementsByClassName("link-buttons");
var sideHover = document.getElementsByClassName("side-buttons");
function mouseovers(event) {
  for (let i = 0; i < linkHover.length; i++) {
    linkHover[i].classList.remove("darkmode");
    linkHover[i].classList.add("nav-hover");
  }
  for (let i = 0; i < sideHover.length; i++) {
    sideHover[i].classList.add("nav-hover");
  }
  event.classList.remove("nav-hover");
}
function mouseouts() {
  for (let i = 0; i < linkHover.length; i++) {
    linkHover[i].classList.remove("darkmode");
    linkHover[i].classList.remove("nav-hover");
  }
  for (let i = 0; i < sideHover.length; i++) {
    sideHover[i].classList.remove("nav-hover");
  }
}




var menu = document.getElementsByClassName("bar");
function navOver() {
  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.add("menu-hover");
  }
}
function navOut() {
  for (let i = 0; i < menu.length; i++) {
    menu[i].classList.remove("menu-hover");
  }
}

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 750px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Full nav');
    links.style.display = "block";
    document.getElementById("open-nav").classList.remove("change");
  }
  else {
    console.log('Minimal nav');
    links.style.display = "none";
    document.getElementById("open-nav").classList.remove("change");
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial Check
handleTabletChange(mediaQuery);
