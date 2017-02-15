console.log('hello');



(function(exports) {
 var text = "text";
 var ID = 0;

	function addText(string, assignID_func){
    function noteId(){
      console.log(assignID())
    };
	  return text = string;
	}
	function returnText(){
	console.log(text)
  return text;
	}
  function assignID(){
    return ID += 1;
  }

	exports.returnText = returnText;
	exports.addText = addText;
  exports.addText.noteId = noteId;
})(this);
