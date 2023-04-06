// Seleccione todos los botones en la calculadora y la pantalla
const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.calculator-screen');

// Inicializar la variable que almacena el primer número ingresado por el usuario
let firstNumber = '';
// Inicializar la variable que almacena el operador seleccionado por el usuario
let operator = '';
// Inicializar la variable que almacena el segundo número ingresado por el usuario
let secondNumber = '';

// Función que actualiza la pantalla de la calculadora con el número ingresado por el usuario
function updateScreen(number) {
    screen.value = number;
}

// Agregue un evento clic a cada botón
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    if (button.classList.contains('operator')) {
      // Si se selecciona un operador, almacene el primer número y el operador seleccionado
        firstNumber = screen.value;
        operator = button.value;
      // Borrar la pantalla de la calculadora
        screen.value = '';
    } else if (button.classList.contains('all-clear')) {
      // Si se selecciona el botón "AC", reiniciar la calculadora
        firstNumber = '';
        operator = '';
        secondNumber = '';
        screen.value = '';
    } else if (button.classList.contains('decimal')) {
      // Si se selecciona el botón de punto, agregar un punto al número actual en pantalla
        if (!screen.value.includes('.')) {
        screen.value += button.value;
        }
    } else if (button.classList.contains('equal-sign')) {
      // Si se selecciona el botón "=",
      // almacene el segundo número y muestre el resultado en la pantalla
        secondNumber = screen.value;
        if (operator === '+') {
        updateScreen(parseFloat(firstNumber) + parseFloat(secondNumber));
        } else if (operator === '-') {
        updateScreen(parseFloat(firstNumber) - parseFloat(secondNumber));
        } else if (operator === '*') {
        updateScreen(parseFloat(firstNumber) * parseFloat(secondNumber));
        } else if (operator === '/') {
        updateScreen(parseFloat(firstNumber) / parseFloat(secondNumber));
        } else if (operator === '^') {
        updateScreen(Math.pow(parseFloat(firstNumber), parseFloat(secondNumber)));
        }
        } else if (button.classList.contains('sqrt-btn')) {
        // Si se selecciona el botón "sqrt", mostrar la raíz cuadrada del número actual en pantalla
            updateScreen(Math.sqrt(parseFloat(screen.value)));
    } else {
      // Si se selecciona un número, agregarlo al número actual en pantalla
        screen.value += button.value;
    }
    });
});
