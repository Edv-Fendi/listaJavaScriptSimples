function exibeObjeto() {
    console.log(this)
}

function amadurecer() {
    if (!this.madura) {
        console.log("A fruta vai amadurecer");
        this.madura = true
    } else {
        console.log("Se amadurecer mais apodrece");
    }

}

function tFrutas() {
    this.frutas.lenght;
}

const fruta1 = {
    nome: "maçã",
    cor: "vermelha",
    quantidade: 02,
    madura: false,
    defineQuantidade(numero) {
        this.quantidade = numero;
    },
    amadurecer: amadurecer,
    mostrar: exibeObjeto

}

function funcaoDeFora() {
    console.log("Fazendo a funcao");
    return ("retorno da funcao");

}


const fruta2 = {
    nome: "maracuja",
    cor: "amarelo",
    quantidade: 04,
    madura: true,
    mostrar: exibeObjeto,
    amadurecer: amadurecer,


}

const fruta3 = {
    nome: "laranja",
    cor: "laranja",
    quantidade: 01,
    madura: false,
    mostrar: exibeObjeto,
    amadurecer: amadurecer
}

const fruta4 = {
    nome: "verde",
    cor: "verde",
    quantidade: 03,
    madura: false,
    mostrar: exibeObjeto,
    amadurecer: amadurecer
}

const fruta5 = {
    nome: "melancia",
    cor: "verde",
    quantidade: 02,
    madura: true,
    mostrar: exibeObjeto,
    amadurecer: amadurecer
}

const cesta1 = {
    proprietario: "Jeffinho",
    material: "vemio",
    frutas: [fruta2, fruta3, fruta5],
    mostrar: exibeObjeto,
    totalFrutas: tFrutas

}
const cesta2 = {
    proprietario: "Jorge",
    material: "plastico",
    frutas: [fruta1, fruta4, fruta5],
    mostrar: exibeObjeto,
    totalFrutas: tFrutas

}
const cesta3 = {
    proprietario: "Joelson",
    material: "palha",
    frutas: [fruta2, fruta4, fruta5],
    mostrar: exibeObjeto,
    totalFrutas: tFrutas
}
const cesta4 = {
    proprietario: "Jebliskebson",
    material: "palha de trigo",
    frutas: [fruta5],
    mostrar: exibeObjeto,
    totalFrutas: tFrutas
}

const mesa = {
    cestas: [cesta1, cesta2, cesta3, cesta4],
    quantidadeCestas: 0,
    mostrar: exibeObjeto
}

// console.log(mesa.quantidade = mesa.cestas.length);
// console.log(mesa);

