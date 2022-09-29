// Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit.Faça um algoritmo para ler uma temperatura Celsius e imprimi - Ia em Fahrenheit(pesquise como fazer este tipo de conversão). 

// celsius * 1.8 + 32

const temp = prompt("Digite a temperatura: ");

const result = ((temp * 1.8) + 32);

console.log("A temperatura em Fahrenheit é de:" + result);