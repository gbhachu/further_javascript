function testNotelistView(){
  var first = addText("Food: pesto");
  var second = addText("Drink: seltzer");
  addNoteList(first);
  addNoteList(second);
  // if (returnHTMLString().includes("Food: pesto</div></li><li><div>Drink: seltzer") == false) {
  //   throw new Error("list view is incomplete");
  // }
};

testNotelistView();
