function verificarFibonacci() {
    var fib0;
    var fib1;
    var fib3;
    var i;
    fib3 = parseInt(document.getElementById("fib3").value);
    fib0 = 0;
    fib1 = 1;

    i = 0;
    while(i <= fib3){
        fib3 = fib0 + fib1;
        document.getElementById("res").innerHTML += fib3;
        fib0 = fib1;
        fib1 = fib3;
        i++;
    }
    
}