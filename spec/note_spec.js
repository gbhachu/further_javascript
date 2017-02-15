console.log("test");

function testNewNote(string){
  addText(string);
  returnText();
  if (returnText() != string) {
    throw new Error("note is not initialized");
  }
  if (noteId() != 1) {
    throw new Error("id is incorrect")
  }
};

testNewNote("earl grey");
