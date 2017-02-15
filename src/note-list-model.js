(function(exports) {
  var notelist = [];
  function addNoteList(note){
    return notelist.push(note);
  }
  function checkArray(){
    console.log (notelist.length)
    return notelist.length;
  }
  function returnArray(){
    return notelist;
  }

  function getNoteList(){
    var short=[]
    for(i=0; i<notelist.length; i++){short.push(notelist[i].substring(0,19))}
   //return notelist.join('</div></li><li><div>')
    return short.join('</div></li><li><div>')
  }


  exports.addNoteList = addNoteList;
  exports.checkArray = checkArray;
  exports.returnArray = returnArray;
  exports.getNoteList = getNoteList;
})(this);
