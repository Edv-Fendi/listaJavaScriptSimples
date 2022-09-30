// Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas, considerando
// // peso 2 para a primeira nota e peso 3 para a segunda nota.


const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

const result = (nota1 * 2) + (nota2 * 3) / 5


console.log(nota1)
console.log(nota2)

console.log("Sua media vai ser de: " + result)
