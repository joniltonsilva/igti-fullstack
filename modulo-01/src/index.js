
let inputRangeRed = null;
let inputRangeGreen = null;
let inputRangeBlue = null;

let inputTextRed = null;
let inputTextGreen = null;
let inputTextBlue = null;

let shapeSquare = null;

window.addEventListener('load', init);

function init() {
  
    shapeSquare = document.getElementById('shapeSquare');

    inputRangeRed = document.getElementById('inputRangeRed');
    inputRangeGreen = document.getElementById('inputRangeGreen');
    inputRangeBlue = document.getElementById('inputRangeBlue');

    inputTextRed = document.getElementById('inputTextRed');
    inputTextGreen = document.getElementById('inputTextGreen');
    inputTextBlue = document.getElementById('inputTextBlue');

    inputRangeRed.addEventListener('change', changeRed);
    inputRangeGreen.addEventListener('change', changeGreen);
    inputRangeBlue.addEventListener('change', changeBlue);
    
    syncShape();
}

function changeRed(event){       
    inputTextRed.value = event.target.value;
    syncShape();
}

function changeGreen(event){
    inputTextGreen.value = event.target.value;
    syncShape();
}

function changeBlue(event){
    inputTextBlue.value = event.target.value;
    syncShape();
}

function syncShape(){
    shapeSquare.style.backgroundColor = `rgb(${inputRangeRed.value}, ${inputRangeGreen.value}, ${inputRangeBlue.value})`;
}