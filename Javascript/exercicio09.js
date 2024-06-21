function calcularFatorial() {

    var num1;
    var res;
    res = 1;
    num1 = parseInt(document.getElementById("num1").value);

    while(num1 > 1) {
        res = res * num1;
        num1 = num1 - 1;
    }

    document.getElementById("res").innerHTML = res;

}
