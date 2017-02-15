console.log('hello');

(function(exports) {
 var text = "text";
 var id = 0;

	function addText(string){
	return text = string ;
	}

	function returnText(){
  	return text;
	}

  	function assignId(){
  	id += 1;
  	return id;
  	}

  	function returnId(){
  	return assignId();
  	}


exports.returnText = returnText;
exports.addText = addText;
exports.returnId = returnId;
})(this);
