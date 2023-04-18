var old = 0;
window.addEventListener("scroll", function(){
   var newval = window.pageYOffset || document.documentElement.scrollTop;
 if (newval < old) {
    document.getElementById("header").style.height = "100px";
    document.getElementById("title").style.fontSize = "40px";
      document.getElementById("nav-intro").style.visibility="visible";
      document.getElementById("nav-intro").style.opacity="1"
      document.getElementById("nav-music").style.visibility="visible";
      document.getElementById("nav-music").style.opacity="1"
      document.getElementById("nav-legacy").style.visibility="visible";
      document.getElementById("nav-legacy").style.opacity="1"
   } 
    else{
    document.getElementById("header").style.height = "50px";
    document.getElementById("title").style.fontSize = "30px";
document.getElementById("nav-intro").style.visibility="hidden";
document.getElementById("nav-intro").style.opacity="0"
document.getElementById("nav-music").style.visibility="hidden";
document.getElementById("nav-music").style.opacity="0"
document.getElementById("nav-legacy").style.visibility="hidden";
document.getElementById("nav-legacy").style.opacity="0"

  }
   old = newval <= 0 ? 0 : newval;
}, false);
