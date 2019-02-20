// note-model.js
'use strict';

(function(exports) {
  
  function Note(someText) {
    this._text = someText;
  };
  
  Note.prototype.showText = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);
