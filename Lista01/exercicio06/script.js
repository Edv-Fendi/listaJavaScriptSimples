// A fábrica de refrigerantes Meia - Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros.Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou.

const lata = prompt("Digite quantas latas voce comprou");
const garrafa = prompt("Digite a quantidade de garrafas de 600ML");
const pet = prompt("Digite a quantidade de garrafas de 2L");

const result = ((lata * 0.350) + (garrafa * 0.600) + (pet * 2));

console.log("O total comprados foi de " + result + "Litros");
