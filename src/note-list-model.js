// note-list-model.js
'use strict';

(function(exports) {
  
  function NoteList() {
    this._notelist = [];
  };

  NoteList.prototype.addNoteToList = function(note){
    this._notelist.push(note);
  };
  
  NoteList.prototype.showList = function() {
    return this._notelist;
  };

  exports.NoteList = NoteList;
})(this);