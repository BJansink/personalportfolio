// When the user clicks on <skill>, open the popup
function myFunction(event) {
    console.log(event.target.id);
  var popup = document.getElementById(event.target.id+"-skill");
  popup.classList.toggle("show");
  console.log("HI all!!")
}