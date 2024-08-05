// Função que calcula o IMC do usuário.
function calculate() {
    var altura = document.getElementById("height_input").value;
    var peso = document.getElementById("weight_input").value;

    var imc = parseFloat((peso / (altura * altura)).toFixed(2));

    document.querySelector('.calc-result strong').innerHTML = (imc);

}

// Função que apaga o cálculo.
function clean() {
    document.getElementById("height_input").value = '';
    document.getElementById("weight_input").value = '';
    document.querySelector('.calc-result strong').innerHTML = ('');
}


// Função para adicionar o '.' automaticamente nos input de altura e peso.
function formatDecimalInput(event) {
    let input = event.target;
    let value = input.value;

    value = value.replace(/[^0-9]/g, '');

    if (value.length > 2) {
        value = value.slice(0, -2) + '.' + value.slice(-2);
    }

    input.value = value;
}

