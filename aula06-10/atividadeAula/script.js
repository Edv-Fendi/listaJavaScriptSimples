const array = [];

    for (let i = 0; i <= 100; i++){
        array[i] = i;
    }

function verificadorNumero (array){
        if(array % 2 == 0){
            console.log(array + " O numero é par");
        } else {
            console.log(array + " O numero é impar");
        }
}

console.log(array.forEach(verificadorNumero));




