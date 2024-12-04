var obj = {};

obj.delete = function () {
  var deleteLinks = document.querySelectorAll(".delete");

  for (var i = 0; i < deleteLinks.length; i++) {
    deleteLinks[i].addEventListener("click", (event) => {
      rowToDelete = event.target.parentNode.rowIndex;

      document.querySelector("table").deleteRow(rowToDelete);
    });
  }
};

obj.edit = function () {
  var editLinks = document.querySelectorAll(".edit");

  for (var i = 0; i < editLinks.length; i++) {
    editLinks[i].addEventListener("click", (event) => {
      var rowToEdit = event.target.parentNode;
      rowToEdit.contentEditable = true;
      rowToEdit.style.backGroundColor = "grey";
    });
  }
};
