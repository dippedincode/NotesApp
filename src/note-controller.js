// note-controller.js

(function(exports) {
  function NoteController() {
  }

  NoteController.prototype.getApp = function () {
    console.log(document.getElementById("app").innerHTML);
  }

  NoteController.prototype.getApp = function () {
    document.getElementById("app").innerHTML = "howdy";
  }

exports.NoteController = NoteController;
})(this);

var something = new NoteController();
something.getApp();