(function() {
  note = new Note("Favourite drink: seltzer");
  singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView);
  assert.isTrue(singleNoteView.note === note);

})();

(function() {
  note = new Note("Favourite drink: seltzer");
  singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.generateHTML() === "<div>Favourite drink: seltzer</div>");

})();
