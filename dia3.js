// CÁLCULO IMC
let peso = 97;
let altura = 1.87;
let imc = peso / (altura **2);
let resultado;
if (imc < 18.5) {
  resultado = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado = "Peso normal";
  } else if (imc >= 24.9 && imc < 29.9) {
    resultado = "Sobrepeso";
  } else {
    resultado = "Obesidade";
  }
  console.log("Seu IMC é: " + imc.toFixed(2) + ". Isso é considerado " + resultado + ".");
  // VIAGEM DE CARRO
let distanciaviagem = 279;
let precolitrogasolina = 6;
let rendimentocarro = 12;
let litrosviagem = distanciaviagem / rendimentocarro;
let custototalgasolina = litrosviagem * precolitrogasolina;
console.log("A viagem de " + distanciaviagem + " km" + " precisará de " + litrosviagem + " litros de gasolina" + " e custará " + custototalgasolina + " Reais");
