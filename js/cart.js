//===============================
//===========cart.js=============
//=====Written by James Hardy====
//==Good enough for the demo lol=
//===============================
function cart()  {


var monthsBox = document.getElementById('quantitybox').value * 1;
var monthsCrate = document.getElementById('quantitycrate').value * 1;
var monthsPallet = document.getElementById('quantitypallet').value * 1;

var totalMonths = monthsBox + monthsCrate + monthsPallet;

document.getElementById("carttotal").innerHTML = totalMonths;
document.getElementById("carttotal").className += " animated rubberBand";

var x = document.getElementById("carttotal");

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationEnd", function() {document.getElementById("carttotal").className = "cyan white-text"});

// Standard syntax
x.addEventListener("AnimationEnd", function() {document.getElementById("carttotal").className = "cyan white-text"});
}
