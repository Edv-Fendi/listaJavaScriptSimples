const pessoas = [{
    nome: "",
    altura: 0,
    peso: 0,
    imc: 0
}]
// const tam = parseInt(prompt("Informe quantas pessoas vai inserir na lista"));
do {
    const pessoa = {
        nome: prompt("Digite um nome"),
        altura: parseFloat(prompt("Digite sua altura")),
        peso: parseFloat(prompt("Digite seu peso"))
    }

    let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

    pessoa.imc = imc;

    if (imc < 17) {
        alert("Muito abaixo do peso")
    } else if (imc > 17 && imc <= 18.49) {
        alert("Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 24.99) {
        alert("Peso normal")
    } else if (imc >= 25 && imc <= 29.99) {
        alert("Acima do peso")
    } else if (imc >= 30 && imc <= 34.99) {
        alert("Obesidade I")
    } else {
        alert("Obesidade II")
    }

    pessoas.push(pessoa);
    console.table(pessoas)
} while (confirm("Deseja continuar"))







