(function(exports){

  function NoteListView(notelist = new NoteList()){
    this._listToDisplay = notelist._notes;
    console.log(this._listToDisplay);
  }

  NoteListView.prototype.display = function(){
    var output = "";
    this._listToDisplay.forEach(function(note) {

      output += "<li>" +  createURL(note._id) + truncateTo20Chars(note._content) + "</a></li>"
    });

    return ("<ul>" + output + "</ul>");
  }

  function truncateTo20Chars(notecontent){
    var maxCharLength = 20;
    var myString = notecontent;
    return myString.substring(0,maxCharLength);
  }

  function createURL(id){
    return "<a href='http://localhost:8080#notes/" + id + "'" + " >";

  }

  exports.NoteListView = NoteListView;

})(this)
