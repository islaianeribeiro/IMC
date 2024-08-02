// Função que calcula o IMC do usuário.
function calcular() {
    var altura = document.getElementById("altura_input").value;
    var peso = document.getElementById("peso_input").value;

    var imc = parseFloat((peso / (altura * altura)).toFixed(2));

    document.querySelector('.calc-result strong').innerHTML = (imc);

}

// Função que apaga o cálculo.
function limpar() {
    document.getElementById("altura_input").value = '';
    document.getElementById("peso_input").value = '';
    document.querySelector('.calc-result strong').innerHTML = ('');
}


// Função para adicionar o '.' automaticamente nos input de altura e peso.
function formatDecimalInput(event) {
    // Obtém o valor atual do input
    let input = event.target;
    let value = input.value;

    // Remove todos os caracteres não numéricos, exceto ponto
    value = value.replace(/[^0-9]/g, '');

    // Adiciona o ponto decimal no lugar correto
    if (value.length > 2) {
        value = value.slice(0, -2) + '.' + value.slice(-2);
    }

    // Atualiza o valor do input com a formatação
    input.value = value;
}

