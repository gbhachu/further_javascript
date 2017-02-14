function testNotelistView(){
  var first = addText("Favourite food: pesto");
  var second = addText("Favourite drink: seltzer");
  var third = addText("Favourite dessert: tiramisu");
  addNoteList(first);
  addNoteList(second);
  addNoteList(third);

  if (returnHTMLString().includes("Favourite food: pesto</div></li><li><div>Favourite drink: seltzer") == false) {
    throw new Error("list view is incomplete");
  }
};

testNotelistView();
