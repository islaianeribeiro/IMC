function calculate() {
    var altura = document.getElementById("altura_input").value;
    var peso = document.getElementById("peso_input").value;

    var imc = peso / altura ** 2

    document.querySelector('.calc-result strong').innerHTML = (imc).toFixed(2);

}
