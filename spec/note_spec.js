console.log("test");

function testNewNote(string){
  addText(string);
  returnText();
  if (returnText() != string) {
    throw new Error("note is not initialized");
  }
};

testNewNote("earl grey");
