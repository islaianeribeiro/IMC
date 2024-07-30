
function calcular() {
    var altura = document.getElementById("altura_input").value;
    var peso = document.getElementById("peso_input").value;

    var imc = parseFloat((peso / (altura * altura)).toFixed(2));

    document.querySelector('.calc-result strong').innerHTML = (imc);

}

function limpar() {
    document.getElementById("altura_input").value = '';
    document.getElementById("peso_input").value = '';
    document.querySelector('.calc-result strong').innerHTML = ('');
}





