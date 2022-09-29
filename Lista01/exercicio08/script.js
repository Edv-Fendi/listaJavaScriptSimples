// Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa.Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio.


const hPessoa = prompt("Digite a altura da pessoa: ");
const hsombraPessoa = prompt("Digite o tamanho de sua sombra");
const hSombraPredio = prompt("Digite o tamanho da sombra do predio: ");

const result = ((hSombraPredio * hPessoa) / hsombraPessoa);

console.log("O resultado e: " + result);