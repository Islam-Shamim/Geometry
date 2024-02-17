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
    const area = 0.5 * baseValue * heightValue;
    const triArea = document.getElementById("triangleArea");
    triArea.innerText = area;

}

//rectangle
function calculateRectangleArea(){
    //get rectangle width value
    const widthField = document.getElementById('r-width');
    const widthValueText = widthField.value;
    const widthValue = parseFloat(widthValueText);

    //get rectangle lenght value
    const lenghtField = document.getElementById('r-lenght');
    const lenghtValueText = lenghtField.value;
    const lenghtValue = parseFloat(lenghtValueText);

    //rectangle area
    const area = widthValue * lenghtValue;
    const triArea = document.getElementById("rectangleArea");
    triArea.innerText = area;
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
    const area = 3.1416 * minorValue * majorValue;
    const triArea = document.getElementById("ellipseArea");
    triArea.innerText = area;
}

//function reuseable

//parallelogram
function calculateParallelogramArea(){
    //get parallelogram base value
    const base = getInputValue('p-base');
    
    //get parallelogram height value
    const height = getInputValue('p-height');

    //parallelogram area
    const area = base * height;
    setArea('parallelogramArea',area);

}
//rhombos
function calculateRhombusArea(){
    //get parallelogram base value
    const diagonal1 = getInputValue('r-d1');
    
    //get parallelogram height value
    const diagonal2 = getInputValue('r-d2');

    //parallelogram area
    const area = 0.5 * diagonal1 * diagonal2;
    setArea('rhombusArea',area);

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