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
  window.addEventListener("hashchange", showNoteForCurrentPage);
}

function showNoteForCurrentPage() {

  showNote(getIdFromURL(window.location));
}

function getIdFromURL(location) {
  return location.hash.split("#notes/")[1];
};

function showNote(id) {
  var thisnote = findNote(id);
  view = document.getElementById("view");
  view.innerHTML = new SingleNoteView(thisnote).generateHTML();
}

function findNote(id){
    for (var i=0; i<notecontroller.list._notes.length; i++) {
      if (notecontroller.list._notes[i]._id == id) return notecontroller.list._notes[i]
    }
}

function listenForFormSubmit() {
  document.getElementById("text").addEventListener("submit", function(submitEvent) {

 			submitEvent.preventDefault();
      console.log(submitEvent.path[0][0].value);
 		});

}
listenForFormSubmit();

exports.NoteController = NoteController;

})(this)
