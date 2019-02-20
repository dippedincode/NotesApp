// note-model.js
'use strict';

(function(exports) {
  
  function Note(some_text) {
    this._text = some_text;
  };
  
  Note.prototype.showText = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);
