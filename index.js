// When the user clicks on <skill>, open the popup
function myFunction(event) {
    console.log(event.target.id);
   var parent = document.getElementById("skill-explanation");

   var children = parent.children;
   for (var i = 0; i < children.length; i++) {
     var tableChild = children[i];
     tableChild.classList.remove("show");
   }

   var parent = document.getElementById("skills-list");

   var children = parent.children;
   for (var i = 0; i < children.length; i++) {
     var tableChild = children[i];
     tableChild.classList.remove("selected");
   }

  var selected = event.target;
  selected.classList.add("selected");
  var popup = document.getElementById(event.target.id+"-skill");
  popup.classList.toggle("show");

  var elmntToView = document.getElementById(event.target.id+"-skill");
  elmntToView.scrollIntoView({ block: 'end',  behavior: 'smooth' }); 
  console.log("HI all!!");
}