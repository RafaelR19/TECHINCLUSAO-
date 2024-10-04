function calcularDesconto(valorCompra, desconto){
    let valorDesconto = (valorCompra) / (desconto) / 100;
    let valorFinal = (valorCompra) - (valorDesconto);
    
    return "Seu desconto é de: " + "R$" + valorDesconto + ",00" + ", " + "valor final = " + "R$" + valorFinal + ",00" + ".";
}

console.log(calcularDesconto(1200, 0.1))