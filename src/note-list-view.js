// note-list-view.js
'use strict';

(function (exports) {

  function NoteListView() {
    this._notelistview = "";
  };
  
  NoteListView.prototype.showNotesInListInHTML = function(list) {
    var listItems = "";
    for (var i=0; i < list._notelist.length; i++) {
      listItems += "<li>" + list._notelist[i]._text + "</li>";
    }
    this._notelistview = "<div><ul>" + listItems + "</ul></div>";
    return this._notelistview;
  };

  exports.NoteListView = NoteListView;
})(this);
