function inverterNumeros() {

    var num1;
    var res;

    res = parseInt(document.getElementById("num1").value);
    
    if(num1 > 0){
        res = num1;
    }
    else(){
        res = "Informe um Número Positivo"

    }
    document.getElementById("res").innerHTML = res;
}