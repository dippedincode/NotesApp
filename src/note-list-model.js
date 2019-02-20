// note-list-model.js
'use strict';

(function(exports) {
  
  function NoteList() {
    this._notelist = [];
  };

  NoteList.prototype.addNoteToList = function(note) {
    this._notelist.push(note);
  };
  
  NoteList.prototype.showList = function() {
    return this._notelist;
  };

  NoteList.prototype.createNoteAndAddToList = function(someText) {
    var note = new Note(someText);
    this._notelist.push(note);
  } 

  exports.NoteList = NoteList;
})(this);