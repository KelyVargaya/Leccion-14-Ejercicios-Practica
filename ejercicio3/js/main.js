
window.onload = function() {
  var botonCalcular = document.getElementById("convertirCelsius");
  botonCalcular.onclick = convertirCelsius;
};

function convertirCelsius() {
  var celsius = document.getElementById("fahrenheit").value;   
  var resultado = document.getElementById("resultado");
  var farenheit = (celsius * (9/5)) + 32.;   
  
  resultado.innerHTML =  farenheit.toFixed(2);
}
