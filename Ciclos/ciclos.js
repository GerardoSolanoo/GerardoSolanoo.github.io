var number;
var result;

function cicloFor(){
    let numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 1;
    for(let i = 1; i<number; i++){
        result *= i;
    }
    console.log(result);
    document.getElementById("for").innerHTML = result;
}

function cicloWhile(){
    let numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 0;
    let i = 1;
    while(i<=number){
        console.log(i);
        result += i;
        i++;
    }
    console.log(result);
    document.getElementById("while").innerHTML = result;
}

function cicloDoWhile(){
    let numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 0;
    let i = 1;
    let avg;
    do{
        console.log(i);
        result += i;
        i++;
    }while(i<=number);
    avg = result / number;
    console.log(avg);
    document.getElementById("dowhile").innerHTML = avg;
}