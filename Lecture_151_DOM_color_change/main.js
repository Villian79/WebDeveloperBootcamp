var button = document.querySelector("button");


/*   ==== VERSION 1 ======

var isPurple = false;

button.addEventListener("click", function(){
	if(isPurple){
		document.body.style.background = "white";
	}
	else{
		document.body.style.background = "purple";
	}
	isPurple = !isPurple;
});
*/

//   ===== VERSION 2 ======

button.addEventListener("click", function() {
	document.body.classList.toggle("purple");
});