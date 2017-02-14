(function(noteList) {
  var notelist = [];
  function addNoteList(model){
    return notelist.push(model);
  }
  function checkArray(){
    console.log (notelist.length)
    return notelist.length;
  }
  function returnArray(){
    return notelist;
  }

  function getNoteList(){
   return notelist.join('</div></li><li><div>');
  }
  noteList.addNoteList = addNoteList;
  noteList.checkArray = checkArray;
  noteList.returnArray = returnArray;
  noteList.getNoteList = getNoteList;
})(this);
