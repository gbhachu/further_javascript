function testNewNoteList(){
  var first = 'cat'
  var second = 'dog'
  addNoteList(first);
  addNoteList(second);
  if (checkArray() != 2) {
    throw new Error("notelist is not expected length");
    }
 if (returnArray()[0] != "cat") {
    throw new Error("notelist content is incorrect");
    }
  if (getNoteList() == '') {
    throw new Error("notelist is empty");
  }
};

testNewNoteList()
