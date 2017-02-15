'use strict';

(function(exports){
	function display(string, returnHTMLString_func, addText_func, addNoteList_func){
	addNoteList(addText(string));
	return returnHTMLString();
	};
	exports.display = display
})(this)


// document.getElementById("app").innerHTML = display("I like Bananas, they are awesome!!!!!");
// document.getElementById("app").innerHTML = display("I like Football, it is awesome!!!!!");
// document.getElementById("app").innerHTML = display("I like Steak, it is awesome!!!!!");
// document.getElementById("app").innerHTML = display("I like Javascript, it is awesome!!!!!!");

// <div><li> start  (covered)
// <a href="a">a</a> need to repeat
// </div></li><div><li> separator
// <a href="b">b</a> need to repeat
// </div></li> end (covered)