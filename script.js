function appendToDisplay(value) {
  if (value === '*') {
    value = ' X '; // Replace "*" with "X"
  }
  document.getElementById('display').value += value;
}

function allClearDisplay() {
  display.value = "";
}

function deleteFromDisplay() {
  if(display.value == "Infinity"){
    display.value = "";
  }
  display.value = display.value.toString().slice(0, -1);
}
function calculate() {
  // Replace "X" with "*"
  var expression = document.getElementById('display').value.replace(/X/g, '*');
  var result = eval(expression);
  document.getElementById('display').value = result;
}
