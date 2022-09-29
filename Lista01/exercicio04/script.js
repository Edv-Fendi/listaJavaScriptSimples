// A granja Frangotech possui um controle automatizado de cada frango da sua produção.No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir.Sabendo que o anel com chip custa R$4, 00 e o anel de alimento custa R$3, 50, faça um algoritmo para calcular o gasto total da granja para marcar todos os seus frangos.

const anelAlimento = 7.00;
const anelIdentific = 4.00;

const frangos = prompt("Digite quantos frangos voce tem: ");

const result = (frangos * anelAlimento) + (frangos * anelIdentific);

console.log("A quantidade gasta com anel é: " + result);