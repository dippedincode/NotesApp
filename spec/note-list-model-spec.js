// note-list-model-spec.js

'use-strict';

function testListIsArraySize0() {
  var mynotelist = new NoteList();
  assert.isTrue(mynotelist._notelist.length === 0);
  console.log("testListIsArraySize0 did run");
};
testListIsArraySize0();

function testAddNoteToList() {
  var list1 = new NoteList();
  var note1 = new Note("Hello");

  list1.addNoteToList(note1);
  assert.isTrue(list1._notelist.length === 1);
  assert.isTrue(list1.showList().includes(note1));
  console.log("testAddNoteToList did run");
};
testAddNoteToList();

function testCreateNoteAndAddItToList() {
  var list2 = new NoteList();
  list2.createNoteAndAddToList("Blue Moon");
  assert.isTrue(list2.showList().pop().showText() === "Blue Moon");
  console.log("testCreateNoteAndAddItToList did run");
};
testCreateNoteAndAddItToList();