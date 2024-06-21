function encontrarMaiorNumero() {

    var num1;
    var num2;
    var num3;
    var maior;

    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);
    maior = num1; // Assume inicialmente que num1 é o maior
    
    // Verifica se num2 é maior que o atual maior
    if (num2 > maior) {
        maior = num2;
    }
    
    // Verifica se num3 é maior que o atual maior
    if (num3 > maior) {
        maior = num3;
    }
    
    document.getElementById("res").innerHTML = "O maior número é: " + maior;
}