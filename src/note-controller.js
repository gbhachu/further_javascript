(function(exports) {

function NoteController(notelist){
  this.list = notelist;
  var notecontroller = this;
  notelistview = new NoteListView(this.list);
}

NoteController.prototype.displayNotes = function(){
  var elem = document.getElementById("app");
  elem.innerHTML = notelistview.display();
}

NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
  window.addEventListener("hashchange", showNoteForCurrentPage(notecontroller));
}

function showNoteForCurrentPage(notecontroller) {
  console.log(window.location);
  console.log(notecontroller.list._notes[0]);
  showNote(getIdFromURL(window.location));
}

function getIdFromURL(location) {
  return location.hash.split("#")[1];
};

function showNote(id) {
  var thisnote = findNote(id, notecontroller);
  console.log(notecontroller)
  view = document.getElementById("view");
  view.innerHTML = new SingleNoteView(thisnote).generateHTML();
}

function findNote(id, notecontroller){
    for (var i=0; i<notecontroller.list._notes.length; i++) {
      if (notecontroller.list._notes[i]._id === id) return notecontroller.list._notes[i]
    }
}

exports.NoteController = NoteController;

})(this)
