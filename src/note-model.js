(function(exports) {

	function Note(noteText, id) {
		this._content = noteText;
		this._id = id;
	}

	Note.prototype.getContent = function() {
		return this._content;
	}

	exports.Note = Note;

})(this);
