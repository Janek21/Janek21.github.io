// this is script
console.log("hi");

document.getElementById("butt1").onclick = function() {
	document.getElementById("heading").style.color = "red";
}

document.getElementById("butt2").onclick = function() {
	document.getElementById("text").style.fontsize = "40px";
}

document.getElementById("butt3").onclick = function() {
	document.getElementById("heading").remove();
}
