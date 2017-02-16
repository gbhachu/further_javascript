
(function(exports) {

  function SingleNoteView(note){
    this.note = note;
  }


  SingleNoteView.prototype.generateHTML = function(){
    return ("<div>" + this.note._content + "</div>");
  }

	exports.SingleNoteView = SingleNoteView;

})(this);
