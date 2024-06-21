function verificarAprovacao() {

    var nota1;
    var nota2;

    var media;

    nota1 = parseInt(document.getElementById("nota1").value);
    nota2 = parseInt(document.getElementById("nota2").value);
    
    if (nota1 >=7 && nota2 >= 7) {
        media = "Aprovado em Ambas as Disciplinas"
    }
    else if (nota1 >=7 || nota2 >= 7) {
        media = "Aprovado Apenas em Uma Disciplina"
    }
    else{
        media = "Reprovado em Ambas"
    }
    
    document.getElementById("res").innerHTML = media;
}