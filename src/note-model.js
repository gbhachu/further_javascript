console.log('hello');



(function(exports) {
 var text = "text";
	function addText(string){
	return text = string;
	}
	function returnText(){
	console.log(text)
  return text;
	}
	exports.returnText = returnText;
	exports.addText = addText;
})(this);
