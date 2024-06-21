function verificarIdade(){

    var num;

    num = parseInt(document.getElementById("num").value);

    if (num >= 18) {
        num = "Maior de Idade";
    } else {
        num = "Menor de Idade";
    }

    document.getElementById("res").innerHTML = num;
}