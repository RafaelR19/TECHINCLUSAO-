function calcularIMC(peso, altura){
let IMC = peso / (altura * altura);
let situação;

if(IMC < 18.5){
    situação = "Abaixo do peso"
}
else if(IMC >= 18.5 && IMC <= 24.9){
    situação = "Peso normal"
}
else if(IMC >= 25 && IMC <= 29.9){
    situação = "Sobrepeso"
}
else if(IMC >= 30){
    situação = "Obesidade"
}

return "Seu IMC é " + IMC +", " + situação;

}

console.log(calcularIMC(80, 1.80));