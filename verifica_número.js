function verificarNumero(valor){
    let situação;

    if(valor == 0){
        situação = "zero"
    }

    else if(valor >0){
        situação = "positivo"
    }
    
    else if(valor <0){
        situação = "negativo"
    }
    
    return "Seu número é " + situação + ".";
}

console.log(verificarNumero(2));
console.log(verificarNumero(7));
console.log(verificarNumero(-3));
