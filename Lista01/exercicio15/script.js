// Um funcionário recebe um salário fixo mais 4 % de comissão sobre as vendas.Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a comissão e o salário final do funcionário. 


const salario = parseInt(prompt("Digite seu salario fixo: "));
const vendas = parseInt(prompt("Digite quantos voce fez em vendas"));

const resulVendas = vendas * 0.04;
const valorFinal = resulVendas + salario;

console.log("Voce vai receber de vendas " + resulVendas);
console.log("Voce vai receber no total: " + valorFinal);