const numA = parseInt(prompt("Digite o primeiro numero"));
const numB = parseInt(prompt("Digite o primeiro numero"));
const numC = (prompt("Digite a operacao"));


function soma(numA, numB) {
    return  numA + numB; 
    
}

function multiplicação(numA, numB) {
    return  numA * numB; 

}

function divisão(numA, numB) {
    return numA / numB; 

}

function diminuir (numA, numB){
    return numA - numB;
}

function vemVaquinha (numA, numB, cb){
    return  cb(numA, numB)
}

function potencia (numA, numB){
    return Math.pow(numA, numB)
}

function porcentagem (numA, numB){
    return  numB * (numA /100)

}

switch (numC) {
    case 'soma':
        console.log(soma(numA,numB));
        break;
    case 'divisão':
        console.log(divisão(numA,numB));
        break;
    case 'multiplicação':
        console.log(multiplicação(numA,numB));
        break;
    case 'diminuir':
        console.log(diminuir(numA,numB));
        break;
    case 'potencia':
        console.log(potencia(numA,numB));
        break;
    case 'porcentagem':
        console.log(porcentagem(numA,numB));

  }
  

// console.log(vemVaquinha(numA,numB,soma));


