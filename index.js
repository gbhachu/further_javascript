
function init(){
  notelist = new NoteList();
  notecontroller = new NoteController(notelist);
  notelist.addNote("Favourite drink: Seltzer");
  notelist.addNote("Favourite drink: Whiskey");
  notelist.addNote("Favourite drink: Beer");
  notelist.addNote("Favourite drink: Gin");
  notecontroller.displayNotes();
  notecontroller.makeUrlChangeShowNoteForCurrentPage();
}


window.onload = init
