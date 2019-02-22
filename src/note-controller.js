// note-controller.js

(function(exports) {
  function NoteController() {
  }

  NoteController.prototype.getApp = function () {
    console.log(document.getElementById("app").innerHTML);
  }

exports.NoteController = NoteController;
})(this);

var something = new NoteController();
something.getApp();