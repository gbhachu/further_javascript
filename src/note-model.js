(function(Note) {
	var text = "";
	function addText(string){
	return text = string;
	}
	function returnText(){
  	return text;
	}
	Note.returnText = returnText;
	Note.addText = addText;
})(this);
