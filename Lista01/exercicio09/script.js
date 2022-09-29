// Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá.Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco(informados pelo usuário). 


const litros = prompt("Digite quantos litros voce deseja fazer de suco: ");

const agua = 8;
const suco = 2;

const totalAgua = (litros * agua);
const totalSuco = (litros * suco);

console.log("O total de partes de agua vai ser de " + totalAgua)
console.log("O total de partes de suco vai ser de " + totalSuco)
