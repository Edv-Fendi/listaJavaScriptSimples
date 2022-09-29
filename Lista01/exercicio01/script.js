// A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer.Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hamburguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduiches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra. 

const queijo = 0.100;
const presunto = 0.50;
const hamburguer = 0.100;

const sanduiche = prompt("Digite o numero de sanduiches");

const quanQueijo = (queijo * sanduiche);
const quantHamburguer = (hamburguer * sanduiche);
const quantPresunto = (presunto * sanduiche);

console.log("Quantidade de queijo: " + quanQueijo + "kg");
console.log("Quantidade de Hamburguer: " + quantHamburguer + "kg");
console.log("Quantidade de Presunto " + quantPresunto + "kg");

