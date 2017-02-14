function testNotelistView(){
  var first = addText("Favourite food: pesto");
  var second = addText("Favourite drink: seltzer");
  addNoteList(first);
  addNoteList(second);


  if (returnHTMLString().includes("<ul><li><div>cat</div></li><li><div>dog</div></li><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>") == false) {
    throw new Error("list view is incomplete");
  }
};

testNotelistView();
