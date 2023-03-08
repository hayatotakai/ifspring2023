document.getElementById('servings').addEventListener("change", servingSize);
document.getElementById('servings').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    servingSize();
    event.preventDefault();
  }
});
function servingSize(){
var value=document.getElementById('servings').value;
value = isNaN(value) ? 0 : value;
document.getElementById('num-apples').innerHTML=value;
value < 9 ? document.getElementById('num-crust').innerHTML="1 ":document.getElementById('num-crust').innerHTML="2 ";
if(value % 8==0){document.getElementById('num-sugar').innerHTML=(value/8);
document.getElementById('num-lemon').innerHTML=(value/8);}
else{document.getElementById('num-sugar').innerHTML=value/gcd(value,8)+"/"+8/gcd(value,8);
document.getElementById('num-lemon').innerHTML=value/gcd(value,8)+"/"+8/gcd(value,8);}
if(value % 4==0){document.getElementById('num-flour').innerHTML=(value/4);}
else{document.getElementById('num-flour').innerHTML=value/gcd(value,4)+"/"+4/gcd(value,4);}
document.getElementById('num-salt').innerHTML=value/gcd(value,32)+"/"+32/gcd(value,32);
document.getElementById('num-nutmeg').innerHTML=value/gcd(value,64)+"/"+64/gcd(value,64);







}
var gcd = function(a, b) {
    if (!b) return a;
  
    return gcd(b, a % b);
  };