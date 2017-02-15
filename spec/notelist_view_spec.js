function testNotelistView(){
  var first = addText("Food: pesto");
  var second = addText("Drink: seltzer");
  addNoteList(first);
  addNoteList(second);
  if (returnHTMLString().includes("cats are the bloody</div></li><li><div>cat</div></li><li><div>doggie is the best </div></li><li><div>Food: pesto</div></li><li><div>Drink: seltzer") == false) {
    throw new Error("list view is incomplete");
  }
};

testNotelistView();
