function verificarNumero() {

    var num1;

    num1 = parseInt(document.getElementById("num1").value);
    
    if (num1 % 2 == 0) {
        num1 = "O Número é Par"
    }
    else{
        num1 = "O Número é Ímpar"
    }
    
    document.getElementById("res").innerHTML = num1;
}