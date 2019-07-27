//Convert Celsius to fahrenheit
let formulas = '';
function convertToF() {
  const celsius = document.getElementById("celsius").value;
  let fahrenheit = celsius * (9/5) + 32;
  formulas += `<p>${celsius}°Celsius = ${fahrenheit}°Fahrenheit</p>`
  document.getElementById("fahrenheit").innerHTML = formulas;
  document.getElementById("celsius").value = '';
}
//Convert Celsius to fahrenheit END

//Reverse A String
function reverseString() {
  let userInput = document.getElementById('reverseStr').value;
  let reversedStr = userInput.split("").reverse().join("");
  document.getElementById("reversedStrResult").innerHTML = reversedStr

}
document.addEventListener('keydown', e => {
  if(e.keyCode === 13) {
    reverseString()
  }
})
//Reverse A String END