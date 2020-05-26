
let inputRangeRed = null;
let inputRangeGreen = null;
let inputRangeBlue = null;

let inputTextRed = null;
let inputTextGreen = null;
let inputTextBlue = null;

let shapeSquare = null;

let r = 0,g = 0,b = 0;

window.addEventListener('load', init);

function init() {
  
    shapeSquare = document.getElementById('shapeSquare');

    inputRangeRed = document.getElementById('inputRangeRed');
    inputRangeGreen = document.getElementById('inputRangeGreen');
    inputRangeBlue = document.getElementById('inputRangeBlue');

    inputTextRed = document.getElementById('inputTextRed');
    inputTextGreen = document.getElementById('inputTextGreen');
    inputTextBlue = document.getElementById('inputTextBlue');

    inputRangeRed.addEventListener('change', inputRangeChange);
    inputRangeGreen.addEventListener('change', inputRangeChange);
    inputRangeBlue.addEventListener('change', inputRangeChange);
    
    syncComponents();
}

function inputRangeChange(event){  
    let value = event.target.value;
    let id = event.target.id;
    switch (id){
        case 'inputRangeRed': r = value; break;
        case 'inputRangeGreen': g = value; break;
        case 'inputRangeBlue': b = value; break;
    }
    
    syncComponents();
}

function syncComponents(){
    inputTextRed.value = r;
    inputTextGreen.value = g;
    inputTextBlue.value = b;
    shapeSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}