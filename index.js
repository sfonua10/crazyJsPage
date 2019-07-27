//Convert Celsius to fahrenheit


function convertToF() {
  const cel = document.getElementById("celsius").value;
  let fahrenheit = cel * (9/5) + 32;
  document.getElementById("fahrenheit").innerHTML = fahrenheit += " fahrenheit";
}

