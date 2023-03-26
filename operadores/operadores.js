var base;
var altura;
var area;

function calcularArea(){
    let baseElement = document.getElementById("base");
    let alturaElement = document.getElementById("altura");
    base = baseElement.value;
    altura = alturaElement.value;
    console.log(base);
    console.log(altura);
}

calcularArea();

area = (base*altura)/2;
console.log(area);

let areaElement = document.getElementById("resultado");
areaElement.innerHTML = "Area = " + area;