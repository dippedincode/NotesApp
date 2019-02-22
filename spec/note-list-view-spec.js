// note-list-view-spec.js

'use-strict';

function testContentContainsListInHTML() {
  var list1 = new NoteList();
  var listview1 = new NoteListView();
  list1.createNoteAndAddToList("Blue Moon");
  list1.createNoteAndAddToList("You saw me standing alone");
  list1.createNoteAndAddToList("Without a dream in my heart");
  list1.createNoteAndAddToList("Without a love of my own");
  assert.isTrue(listview1.showNotesInListInHTML(list1) === 
    "<div><ul><li>Blue Moon</li><li>You saw me standing alone</li><li>Without a dream in my heart</li><li>Without a love of my own</li></ul></div>");
 
  console.log("testContentContainsListInHTML did run");
}
testContentContainsListInHTML();