(function(exports) {

function NoteController(notelist){
  this.list = notelist;
  var notecontroller = this;
  notelistview = new NoteListView(this.list);
  console.log(notecontroller)
}

NoteController.prototype.displayNotes = function(){
  var elem = document.getElementById("app");
  elem.innerHTML = notelistview.display();
}

NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {
  console.log(window.location);
  console.log(notecontroller.list._notes[0]);
  console.log(notecontroller.list._notes[1]);
  console.log(notecontroller.list._notes[2]);
  showNote(getIdFromURL(window.location));
}

function getIdFromURL(location) {
  return location.hash.split("#notes/")[1];
};

function showNote(id) {
  var thisnote = findNote(id);
  console.log(thisnote)
  console.log(id)
  view = document.getElementById("view");
  view.innerHTML = new SingleNoteView(thisnote).generateHTML();
}

function findNote(id){
  console.log(notecontroller.list._notes._id);
    for (var i=0; i<notecontroller.list._notes.length; i++) {
      if (notecontroller.list._notes[i]._id == id) return notecontroller.list._notes[i]
    }
}

exports.NoteController = NoteController;

})(this)
