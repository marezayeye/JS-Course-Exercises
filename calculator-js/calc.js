///////////////////// DEFINING FUNCTIONS/////////////////////////////////
///////////////////
//this function inserts the value of clicked button to the display area.
function buttonClickHandler(event){
    const temp = event.target.innerText;
    if (displayBox.innerHTML == 0){
        return displayBox.innerHTML = temp;
    }
    return displayBox.innerHTML = displayBox.innerHTML +  temp;
};
////////////////////
//this function is called when the calculate (=) button is clicked.
//it calculates the operations in display area and returns the result in the same area
function calculate(){
    let result = displayBox.innerText;
    displayBox.innerText = eval(result);
};
////////////////////
//this function is called when the all-clear (AC) button is clicked.
//it clears all of the contents of the display area.
function allClear(){
    return displayBox.innerHTML = "0";
};
///////////////////////////////
//this function is called when the CLEAR (C) button is clicked. 
//it clears the last number or operator in display area
function clear(){
    let temp = displayBox.innerText;
    if(temp.length == 1){
        return displayBox.innerText = 0;
    } else{
        temp.slice(0,-1);
        return displayBox.innerText = temp.substring(0,temp.length -1);
    }
};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////DECLARING VARIBLES///////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//defining diplay area as a varaible
const displayBox = document.querySelector(".display");

// creating an array of numpad keys and adding an eventListener for all of them.
const buttonList = document.querySelectorAll(".show-display");
buttonList.forEach(item => {
    item.addEventListener("click", buttonClickHandler);
});
//////////////////////////////////////////////////////////////////////////
////////////////////EVENT LISTENERS//////////////////////////////////////
//adding an event listener for the calculate(equals) button
document.querySelector(".calculate").addEventListener("click", calculate);

//adding an eventListener to all-clear(ac) button
document.querySelector(".all-clear").addEventListener("click", allClear);

//adding an eventListener to clear(C) button
document.querySelector(".clear-last").addEventListener("click", clear)