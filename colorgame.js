var count = 6;
var colors =generateRandomColors(count); 
console.log(colors[3]);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay')
var result = document.getElementById("result");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var btneasy = document.getElementById("btneasy");
var btnhard = document.getElementById("btnhard");


btneasy.addEventListener("click",function(){
	btnhard.classList.remove("selected");
	btneasy.classList.add("selected");
	count = 3;
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		if(i < 3){
			square[i].style.background = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
});

btnhard.addEventListener("click",function(){
	btneasy.classList.remove("selected");
	btnhard.classList.add("selected");
	count = 6;
	colors = generateRandomColors(count);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		square[i].style.background = colors[i];	
		square[i].style.display = "block";	
	}
});

colorDisplay.textContent = pickedColor;

reset.addEventListener("click",function(){
	colors = generateRandomColors(count);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	result.textContent = ""
	for (var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});


for (var i =0; i<square.length;i++){
	square[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			result.textContent = "Correct!!";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			reset.textContent = "Play Again";

		}else{
			this.style.backgroundColor = "#232323";
			result.textContent = "Try Again";
		}
	});
	square[i].style.backgroundColor = colors[i];
}


function changeColor(colorr){
	for (var i = 0; i < square.length;i++){
		square[i].style.backgroundColor = colorr;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(x){
	
	var colorsrandom = [];
	for (var i = 0; i < x;i++){
	var numberRandom1 = Math.floor(Math.random() * 255 +1);
	var numberRandom2 = Math.floor(Math.random() * 255 +1);
	var numberRandom3 = Math.floor(Math.random() * 255 +1);
	colorsrandom[i] = "rgb(" + numberRandom1 + ", " + "" + numberRandom2 + ", " + "" + numberRandom3 + ")";
	}
	console.log(colorsrandom);
	return colorsrandom;
}




