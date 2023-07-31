//02 - Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console. 

let total = Number(prompt());
let disponivel = Number(prompt());

console.log(`a soma é ${(total + disponivel)}`);
console.log(`a subtração é ${(total - disponivel)}`);
console.log(`a multiplicação é ${(total * disponivel)}`);
console.log(`a divisão é ${(total / disponivel)}`);