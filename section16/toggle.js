var button=document.querySelector("button");
var judge=false;

button.addEventListener("click", function(){

	// if (judge){
	// 	document.body.style.background="white";
	// }
	// else{
	// 	document.body.style.background="purple";
	// }
	// judge=!judge;
	
	document.body.classList.toggle("purple")
})