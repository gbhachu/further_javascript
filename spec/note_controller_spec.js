function testNoteController(){
	if (document.getElementById('app').innerHTML != returnHTMLString()) {
		throw new Error ('Note controller is not running correctly')
	}
};

testNoteController();