(function(NoteController){
	function display(string, returnHTMLString_func, addText_func, addNoteList_func){
	addNoteList(addText(string));
	return returnHTMLString();
	};
	NoteController.display = display
})(this)


