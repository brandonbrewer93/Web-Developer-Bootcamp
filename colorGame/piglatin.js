
var p = document.querySelector("p");
var button = document.querySelector("button");


function convert(){
	var i = document.querySelector("#input").value;
	var arr = i.split("");
	var first = arr.shift();
	arr.push(first);
	var newString = arr.join("") + "ay";
	p.textContent = newString;

}


button.addEventListener("click", function(){
	convert();
});