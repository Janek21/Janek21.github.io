// this is script
console.log("hi");

document.getElementById("butt1").onclick = function() {
	document.getElementById('demo').style.fontSize='40px';
	document.getElementById("heading").style.color = "red";
}

document.getElementById("butt2").onclick = function() {
	document.getElementById("demo").style.fontsize = "40px";
	document.getElementById('demo').innerHTML="Little hellions, kids feeling rebellious Embarrassed, their parents still listen to Elvis They start feelin' like prisoners, helpless";
	document.getElementById("heading").style.color = "purple";
}

document.getElementById("butt3").onclick = function() {
	//document.getElementById("heading").remove();
	document.body.style.background="yellow";
	document.getElementById("heading").style.display = "none";
}

document.getElementById("resetter").onclick = function() {
	document.getElementById("heading").innerHTML="Welcome to Janek's webbed site";
	document.getElementById('demo').innerHTML="These are buttons, I'll eventually use them for something";
	document.getElementById('demo').style.fontSize='14pt';
	document.body.style.background="#21421e";
	document.getElementById("heading").style.display = "block";
	document.getElementById("heading").style.color = "#e69500"
}
