/*
 * raindrop window by Matt Kersley
 */

 window.addEventListener("load", function()
 {
 	var count = 30;
 	for(var i=0; i<count; i++){
 		var node = document.createElement("span");
 		node.style.left = Math.floor(Math.random() * 100) + "vw";
 		node.style.top = Math.floor(Math.random() * 100) + "vh";
 		document.querySelector(".rain").appendChild(node);
 	}
 });