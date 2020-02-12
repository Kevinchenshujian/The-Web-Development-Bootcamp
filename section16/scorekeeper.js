var p1button=document.querySelector("#p1");
var p2button=document.getElementById("p2");
var resetbutton=document.getElementById("reset");
var display1=document.getElementById("display1");
var display2=document.getElementById("display2");
var numInput=document.querySelector("input");
var winingscoredisplay=document.querySelector("p span");
var gameover=false;
var winingscore=5;
var p1score=0;
var p2score=0;


p1button.addEventListener("click", function(){
	if(!gameover){
		p1score++;
		if(p1score===winingscore){
			display1.classList.add("winner");
			gameover=true;		
	}
	display1.textContent=p1score;
		}
});

p2button.addEventListener("click", function(){
	if(!gameover){
		p2score++;
		if(p2score===winingscore){
			display2.classList.add("winner");
			gameover=true;		
	}
	display2.textContent=p2score;
		}
});

resetbutton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1score=0;
	p2score=0;
	display1.textContent=0;
	display2.textContent=0;
	display1.classList.remove("winner");
	display2.classList.remove("winner");
	gameover=false;
}

numInput.addEventListener("change", function(){
	winingscoredisplay.textContent=this.value;
	winingscore=Number(this.value);
	reset();
});