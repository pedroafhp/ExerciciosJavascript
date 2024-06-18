function bissexto(){

    var ano;//Declarar Variavel
 
    //Coletar Dados
 
    ano = parseInt(document.getElementById("ano").value);
 
    //Realizar a Conta
 
    if(ano % 4 == 0){
        ano = "O Ano é Bissexto"
    }
    else{
        ano = "Não é Ano Bissexto";
    }
    document.getElementById("res").innerHTML = ano;
}