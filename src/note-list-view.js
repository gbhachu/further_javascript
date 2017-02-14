(function(noteListView){
	function returnHTMLString(){

		return '<ul><li><div>' + getNoteList() + '<div></li></ul>';

	};

	noteListView.returnHTMLString = returnHTMLString;
})(this);
