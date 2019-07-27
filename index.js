//Convert Celsius to fahrenheit
let formulas = '';

function convertToF() {
  const celsius = document.getElementById("celsius").value;
  let fahrenheit = celsius * (9/5) + 32;
  formulas += `<p>${celsius}°Celsius = ${fahrenheit}°Fahrenheit</p>`
  document.getElementById("fahrenheit").innerHTML = formulas;
  document.getElementById("celsius").value = 0;
}

