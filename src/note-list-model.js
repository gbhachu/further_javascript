(function(exports) {
  var notelist = [];
  var htmllist = [];
  function addNoteList(note){
    return notelist.push(note);
  }
  function checkArray(){
    return notelist.length;
  }
  function returnArray(){
    return notelist;
  }

  function getNoteList(){
    var short=[]
    for(i=0; i<notelist.length; i++){
    var href = "";
    href = notelist[i].substring(0,1);
    short.push(notelist[i].substring(0,19))}
   //return notelist.join('</div></li><li><div>')
    return short.join('</a></div></li><li><div><a href="">')
  }

  function getHTMLList(){
    for(i=0; i<notelist.length; i++){htmllist.push('<a href="' + returnId() + '">' + notelist[i].substring(0,19) + '</a>');}
    return htmllist.join('</div></li><div><li>')
  }

  exports.addNoteList = addNoteList;
  exports.checkArray = checkArray;
  exports.returnArray = returnArray;
  exports.getNoteList = getNoteList;
  exports.getHTMLList = getHTMLList;
})(this);


