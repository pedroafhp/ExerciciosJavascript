function verificarNumero(){

    var num;

    num = parseInt(document.getElementById("num").value);

    if (num > 0) {
        num = "O número é positivo";
    } else if (num < 0) {
        num = "O número é negativo";
    } else {
        num = "O número é zero";
    }
    document.getElementById("res").innerHTML = num;
}
