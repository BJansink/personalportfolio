// When the user clicks on <skill>, open the popup
function myFunction(event) {
    console.log(event.target.id);
   var parent = document.getElementById("skill-explanation");

   var children = parent.children;
   for (var i = 0; i < children.length; i++) {
     var tableChild = children[i];
     tableChild.classList.remove("show");
   }
  var popup = document.getElementById(event.target.id+"-skill");
  popup.classList.toggle("show");
  console.log("HI all!!")
}