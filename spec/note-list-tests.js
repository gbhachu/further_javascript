

(function() {
	notelist = new NoteList();
	assert.isEmpty(notelist.getNotes());
})();

(function() {
	notelist = new NoteList();
	notelist.addNote("this is a note");
	assert.isNotEmpty(notelist.getNotes());
})();

(function() {
	notelist = new NoteList();
	notelist.addNote("note1")
	notelist.addNote("note2")
	assert.isTrue(notelist._notes[0]._id === 0)
	assert.isTrue(notelist._notes[1]._id === 1)
})();
