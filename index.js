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

//Factorialize A Number
//There is a problem with the input tag, it's currently lagging in the browser
//to display the user input
function factorializeNumber() {
  let userInput = document.getElementById('factorializeInput').value
  document.getElementById('numToFac').innerHTML = userInput;
}

function factorialize(num) {
  if(num === 0) {
    return 1
  }
  let newArr = [];
  for(let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  const newNum = newArr.reduce((a,b) => a * b)
  return newNum;
}

function randomizeNumber() {
  const randomNum = (Math.floor(Math.random() * 20))
  document.getElementById('numToFac').innerHTML = randomNum;
  document.getElementById('facNum').innerHTML = ""; 
  const facNum = factorialize(randomNum);
  let newStr = " ";
  setTimeout(() => { 
    newStr += " - "
    document.getElementById('facNum').innerHTML = newStr; 
  }, 1000);
  setTimeout(() => { 
    newStr += " - "
    document.getElementById('facNum').innerHTML = newStr; 
  }, 2000);
  setTimeout(() => { 
    newStr += " - "
    document.getElementById('facNum').innerHTML = newStr; 
  }, 3000);
  setTimeout(() => { 
    newStr += " > "
    document.getElementById('facNum').innerHTML = newStr; 
  }, 4000);
  setTimeout(() => { 
    newStr += facNum
    document.getElementById('facNum').innerHTML = newStr; 
  }, 5000);
}