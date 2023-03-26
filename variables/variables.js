var nombre = "Gerardo"
var email = "gerardosolano.contact@gmail.com"
var edad = 19

function getNombre(){
	console.log(nombre);
	let myNameElement = document.getElementById("nombre");
	myNameElement.innerHTML = nombre;
}

function getEmail(){
	console.log(email);
	let myEmailElement = document.getElementById("email");
	myEmailElement.innerHTML = "<b>" + email + "</b>";
}

function getEdad(){
	console.log(edad);
	let myEdadElement = document.getElementById("edad");
	myEdadElement.innerHTML = "<h1>" + edad + "</h1>";
	myEdadElement.style.color = "#0000FF";
}
