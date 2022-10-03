// Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário.

const salario = parseFloat(prompt("Digite o seu salário: "));
const salarioMinimo = parseFloat(prompt("Digite o salario minimo: "));

const result = salario / salarioMinimo;

console.log("O total de salarios minimos que voce recebe é: " + result);