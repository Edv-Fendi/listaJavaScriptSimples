// A empresa Hipotheticus paga R$10, 00 por hora normal trabalhada, e R$15, 00 por hora extra.Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário.Considere que o salário líquido é igual ao salário bruto descontando - se 10 % de impostos. 

const hTrabalhada = prompt("Digite a quantidade de horas normais trabalhadas");
const hExtraTrab = prompt("Digite a quantidade de horas extras trabalhadas");

const result = ((hTrabalhada * 10.00) + (hExtraTrab * 15.00) * 0.90);

console.log("O salário final é de: " + result);

