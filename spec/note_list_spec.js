function testNewNoteList(){
  var first = 'cat'
  var second = 'doggie is the best animal in the word!'
  addNoteList(first);
  addNoteList(second);
    if (getNoteList().includes("doggie is the best animal") == true) {
    throw new Error("note is not return as shortened");
  };
};

testNewNoteList()
