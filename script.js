//Will run when the page is loaded.
$(document).ready(function () {

$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));//format day, Month  date , year EX:Wednesday, June 30th, 2021


})

var con = document.querySelector(".container");
var textBoxInput = document.querySelector(".description");
var saveButton = document.querySelector(".saveBtn");
var timeHour = document.querySelector(".hour")
var currentBlockTime = timeHour.textContent;

var dayPlans = [];

console.log(con);
function storeText(){
// var text = textBoxInput.value.trim();
    localStorage.setItem("dayPlans",JSON.stringify(dayPlans));
};
function renderPlanArr() {
  
    for (var i = 0; i < dayPlans.length; i++) {
      var plans = dayPlans[i];
      console.log(plans)
      textBoxInput.textContent = plans;
    }
};
function init() {
    
    var storedPlans = JSON.parse(localStorage.getItem(dayPlans));
  
    if (storedPlans !== null) {
      dayPlans = storedPlans;
    }
    renderPlanArr();
}

function changeTextBoxColor(){

    var timeBlock = moment(currentBlockTime).format("hA");
    console.log(timeBlock);
    var currentHour = moment().format("HH");
    console.log(currentHour)
   
    if(timeBlock = currentHour){
        textBoxInput.setAttribute("style","background-color:red");
    }else if(timeBlock<currentHour){
        textBoxInput.setAttribute("style","background-color:gray");
    }else if(timeBlock>currentHour){
        textBoxInput.setAttribute("style","background-color:blue");
    }
};
saveButton.addEventListener("click",function(event){
    event.preventDefault();
    var plansText = textBoxInput.value.trim();
    dayPlans.push(plansText)
    storeText();
    console.log(dayPlans);
    renderPlanArr();
    
    changeTextBoxColor();
    console.log("saved")
   
    
    
});
init();