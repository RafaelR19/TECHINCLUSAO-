function calcularNotas(nome, nota1, nota2){
    let media = (nota1 + nota2) / 2;
    let situação;

    if(media >=7){ 
        situação = "aprovado"
    }
    
    else{ 
        situação = "reprovado"
    }

    return "A média de " + nome + " é: " + media + "," + " aluno " + situação + ".";
}

console.log(calcularNotas("Rafael", 10, 9.4));
console.log(calcularNotas("Kauan", 10, 7));
console.log(calcularNotas("João", 10, 10));
