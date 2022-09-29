// Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar.Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais.Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real.Não havendo moeda de um tipo, a quantidade respectiva é zero

const umCent = prompt("Digite quantas moedas de 1 centavo voce tem: ");
const cincoCent = prompt("Digite quantas moedas de 5 centavo voce tem: ");
const dezCent = prompt("Digite quantas moedas de 10 centavo voce tem: ");
const vintCinCent = prompt("Digite quantas moedas de 25 centavo voce tem: ");
const cinqCent = prompt("Digite quantas moedas de 50 centavo voce tem: ");
const umReal = prompt("Digite quantas moedas de 1 real voce tem: ");


const result = ((umCent * 0.01) + (cincoCent * 0.05) + (dezCent * 0.10) + (vintCinCent * 0.25) + (cinqCent * 0.50) + (umReal * 1))

console.log("O total que Pedrinho tem é: " + result);


