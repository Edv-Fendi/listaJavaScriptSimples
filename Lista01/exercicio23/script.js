// Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
// a idade dessa pessoa em anos;
// a idade dessa pessoa em meses;
// a idade dessa pessoa em dias
// a idade dessa pessoa em semanas. 


const anoNasc = parseInt(prompt("Digite o ano de nascimento"));
const anoAtual = parseInt(prompt("Digite o ano atual"));

const iAnos = anoAtual - anoNasc;
const iMeses = iAnos * 12;
const iDias = iMeses * 30;
const iSemanas = iDias / 4;

console.log("Voce tem:" + iAnos + "anos");
console.log("Voce tem:" + iMeses + "meses");
console.log("Voce tem:" + iDias + "dias");
console.log("Voce tem:" + iSemanas + "semanas");




