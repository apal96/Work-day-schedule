//Will run when the page is loaded.
$(document).ready(function () {

$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));//format day, Month  date , year EX:Wednesday, June 30th, 2021


})
var con = document.querySelector(".container");
var textBoxInput = document.querySelector(".description");
var saveButton = document.querySelector(".saveBtn");

console.log(con);
function storeText(){
    var text = textBoxInput.value.trim();
    localStorage.setItem("text",JSON.stringify(text));
};
function renderText(){
    var storedText = JSON.parse(localStorage.getItem("text"))
    if (storedText !== null) {
        text = storedText;
      }

};
saveButton.addEventListener("click",function(event){
    event.preventDefault();
    
    
    
});
