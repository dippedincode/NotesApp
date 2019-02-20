// note-model-spec.js
'use strict';

function testNoteContainsCertainString() {
  var note = new Note("My favourite language is JavaScript.");
  assert.isTrue(note.showText() === "My favourite language is JavaScript.");
  console.log("testNoteContainsCertainString did run");
};
testNoteContainsCertainString();