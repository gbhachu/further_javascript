(function(noteList) {
  var notelist = [];
  function addNoteList(model){
    return notelist.push(model);
    console.log(notelist);
  }
  function checkArray(){
    return notelist.length;
  }
  function returnArray(){
    return notelist;
  }

  function getNoteList(){
  var short = [];
   for(i=0; i<notelist.length;i++){short.push(notelist[i].substring(0,19))};
   //return notelist.join('</div></li><li><div>');
   return short.join('</div></li><li><div>');
  }
  noteList.addNoteList = addNoteList;
  noteList.checkArray = checkArray;
  noteList.returnArray = returnArray;
  noteList.getNoteList = getNoteList;
})(this);
