'use strict';

(function(exports){
	function display(string, returnHTMLString_func, addText_func, addNoteList_func){
	addNoteList(addText(string));
	return returnHTMLString();
	};
	exports.display = display
})(this)

document.getElementById("app").innerHTML = display("pesto is my absolute favourite sauce");
document.getElementById("app").innerHTML = display("I like Bananas, they are awesome!!!!!");
document.getElementById("app").innerHTML = display("I like Football, it is awesome!!!!!");
document.getElementById("app").innerHTML = display("I like Steak, it is awesome!!!!!");
document.getElementById("app").innerHTML = display("I like Javascript, it is awesome!!!!!!");
