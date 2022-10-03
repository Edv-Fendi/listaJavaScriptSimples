// Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário.
const num = parseInt(prompt("Digite o numero inteiro que voce deseja saber a tabuada"));

for (let i = 1; i <= 10; i++) {
    const result = num * i;

    console.log(num + " X " + i + " = " + result);

}