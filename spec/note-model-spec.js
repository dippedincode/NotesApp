// note-model-spec.js
'use strict';

function testNoteContainsCertainString() {
  var note = new Note();
  console.log(note.showText());
  assert.isTrue(note.showText() === "My favourite language is JavaScript.");
};

testNoteContainsCertainString()