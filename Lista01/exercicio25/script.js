// Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa.

const cat1 = parseFloat(prompt("Digite o primeiro cateto"));
const cat2 = parseFloat(prompt("Digite o segundo cateto"));

const soma = (cat1 * cat1) + (cat2 * cat2);

const hipotenusa = Math.sqrt(soma)

alert(hipotenusa.toFixed(2))


