var objAlumno = {
    matricula: "",
    nombre: "",
    carrera: ""
};

var myAlumnoJson;
var otherAlumno = {};

function convertObjToJson(){
    let matriculaElement = document.getElementById("matricula");
    let nombreElement = document.getElementById("nombre");
    let carreraElement = document.getElementById("carrera");

    objAlumno.matricula = matriculaElement.value;
    objAlumno.nombre = nombreElement.value;
    objAlumno.carrera = carreraElement.value;

    console.log(objAlumno);
    myAlumnoJson = JSON.stringify(objAlumno);
    console.log(myAlumnoJson);
    
    let jsonElement = document.getElementById("myjson");
    jsonElement.innerHTML = myAlumnoJson;
}

function convertJsonToObj(){
    let jsonElement = document.getElementById("myjson");
    let otherAlumno = JSON.parse(jsonElement.innerHTML);

    console.log(otherAlumno);
    console.log(otherAlumno.matricula);
    console.log(otherAlumno.nombre);
    console.log(otherAlumno.carrera);

    document.getElementById("newMatricula").innerHTML = otherAlumno.matricula;
    document.getElementById("newNombre").innerHTML = otherAlumno.nombre;
    document.getElementById("newCarrera").innerHTML = otherAlumno.carrera;
}

