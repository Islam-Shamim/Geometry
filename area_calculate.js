//triangle
function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById('t-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText);

    //get triangle height value
    const heightField = document.getElementById('t-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);

    //triangle area
    if(isNaN(baseValue)||isNaN(heightValue)){
        alert("Please insert number");
        return
    }
    const area = 0.5 * baseValue * heightValue;
    const triArea = document.getElementById("triangleArea");
    triArea.innerText = area;

    //add to calculation entry
    addToCalculationEntry('Triangle',area);

}

//rectangle
function calculateRectangleArea(){
    //get rectangle width value
    const widthField = document.getElementById('r-width');
    const widthValueText = widthField.value;
    const widthValue = parseFloat(widthValueText);

    //get rectangle length value
    const lenghtField = document.getElementById('r-lenght');
    const lenghtValueText = lenghtField.value;
    const lenghtValue = parseFloat(lenghtValueText);

    //rectangle area
    if(isNaN(widthValue)||isNaN(lenghtValue)){
        alert("Please insert number");
        return
    }
    const area = widthValue * lenghtValue;
    const triArea = document.getElementById("rectangleArea");
    triArea.innerText = area;

    //add to calculation entry
    addToCalculationEntry('Rectangle',area);
}

//ellipse
function calculateEllipseArea(){
    //get ellipse width value
    const minorField = document.getElementById('minor');
    const minorValueText = minorField.value;
    const minorValue = parseFloat(minorValueText);

    //get ellipse lenght value
    const majorField = document.getElementById('major');
    const majorValueText = majorField.value;
    const majorValue = parseFloat(majorValueText);

    //ellipse area
    if(isNaN(minorValue)||isNaN(majorValue)){
        alert("Please insert number");
        return
    }
    const area = 3.1416 * minorValue * majorValue;
    const areaTwoDecimal = area.toFixed(2);
    const triArea = document.getElementById("ellipseArea");
    triArea.innerText = areaTwoDecimal;

    //add to calculation entry
    addToCalculationEntry('Ellipse',areaTwoDecimal);
}

//function reuseable

//parallelogram
function calculateParallelogramArea(){
    //get parallelogram base value
    const base = getInputValue('p-base');
    
    //get parallelogram height value
    const height = getInputValue('p-height');

    if(isNaN(base)||isNaN(height)){
        alert("Please insert number");
        return
    }
    //parallelogram area
    const area = base * height;
    setArea('parallelogramArea',area);

    //add to calculation entry
    addToCalculationEntry('Parallelogram',area);

}
//rhombos
function calculateRhombusArea(){
    //get rhombos base value
    const diagonal1 = getInputValue('r-d1');
    
    //get rhombos height value
    const diagonal2 = getInputValue('r-d2');

    if(isNaN(diagonal1)||isNaN(diagonal2)){
        alert("Please insert number");
        return
    }
    //rhombos area
    const area = 0.5 * diagonal1 * diagonal2;
    setArea('rhombusArea',area);

    //add to calculation entry
    addToCalculationEntry('Rhombos',area);

}

//reuseable function
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

//resueable set area
function setArea(areaId,area){
    const areaField = document.getElementById(areaId);
    areaField.innerText = area;
}



//add to calculation entry
/*
1. get the element where you want to add the dynamic html
2. creat an element that you want to add
3. append the created element as a child of the parent
*/
function addToCalculationEntry(areaType,area){
    //parent
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    //create child
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success ">convert</button>`;
    //append child with parent
    calculationEntry.appendChild(p);
}