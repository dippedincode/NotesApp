// note-model.js
'use strict';

(function(exports) {
  
  function Note() {
    this._text = "My favourite language is JavaScript.";
  };
  
  Note.prototype.showText = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);


