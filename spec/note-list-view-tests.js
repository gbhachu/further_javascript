
//
// (function() {
//   notelist = new NoteList();
//   notelist.addNote("any old nonsense");
//   notelist.addNote("more nonsense");
//   notelistview = new NoteListView(notelist);
//
// 	assert.isTrue(notelistview.display() === "<ul><li><a href=http://localhost:8080#notes/0></a>any old nonsense</li><li><a href=http://localhost:8080#notes/1></a>more nonsense</li></ul>");
// })();

// (function() {
//   notelist = new NoteList();
//   notelist.addNote("more nonsense");
//   notelistview = new NoteListView(notelist);
//
// 	assert.isTrue(notelistview.display() === "<ul><li>more nonsense</li></ul>");
// })();
//
// (function() {
//   notelist = new NoteList();
//   notelistview = new NoteListView(notelist);
//
// 	assert.isTrue(notelistview.display() === "<ul></ul>");
// })();

(function() {

  function stringFill(char, numofTimes) {
    var s = '';
    while (s.length < numofTimes) s += char;
    return s;
  }

  notelist = new NoteList();
  notelist.addNote(stringFill("i",30));
  notelistview = new NoteListView(notelist);

  assert.isTrue(notelistview.display() === "<ul><li><a href='http://localhost:8080#notes/0' >" + stringFill("i",20) + "</a></li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelist.addNote("This is a new note");
  notelist.addNote("This is another new note");
  notelistview = new NoteListView(notelist);
  console.log(notelistview.display());
	assert.isTrue(notelistview.display() === "<ul><li><a href='http://localhost:8080#notes/0' >This is a new note</a></li><li><a href='http://localhost:8080#notes/1' >This is another new </a></li></ul>");
})();
