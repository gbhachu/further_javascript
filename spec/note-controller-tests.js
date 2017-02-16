(function() {
  notelist = []
  assert.isTrue(new NoteController(notelist));

})();

// (function() {
//   notelist = new NoteList();
//   notecontroller = new NoteController(notelist);
//   notelist.addNote("This is a mock mock");
//   assert.isTrue(notecontroller.displayNotes() === "<ul><li><div>This is a mock mock</div></li></ul>");
// })();
