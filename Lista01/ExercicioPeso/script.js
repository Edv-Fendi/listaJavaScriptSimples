// Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
// o novo peso se a pessoa engordar 15 % sobre o peso digitado;
// o novo peso se a pessoa emagrecer 20 % sobre o peso digitado. 

const peso = parseInt(prompt("Digite seu peso: "));

const menPeso = peso * 0.80;
const maisPeso = peso * 1.15;


console.log("Se voce emagrecer 20% seu peso vai ser de: " + menPeso);
console.log("Se voce engordar 15% seu peso vai ser de: " + maisPeso);

