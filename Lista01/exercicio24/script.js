// João recebeu seu salário de R$ 1200, 00 e precisa pagar duas contas(C1 = R$ 200, 00 e C2 = R$120, 00) que estão atrasadas.Como as contas estão atrasadas, João terá de pagar multa de 2 % sobre cada conta.Faça um algoritmo que calcule e mostre quanto restará do salário do João 

const mult1 = 200.00 * 1.02;
const mult2 = 120.00 * 1.02;

const salario = 1200 - mult1 - mult2;

alert("Restará " + salario + " do salario de Joao")



