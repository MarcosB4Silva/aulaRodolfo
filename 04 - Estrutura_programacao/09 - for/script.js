/* Imprima no console de 1 até 5 */

// for(let i = 0; i<= 5; i++){
//     console.log(i);
// }

/* receba um numero o decremente e imprima até 0 */

// for(let A = parseInt(prompt('digite um numero')); A >= 0; A--){
//     console.log(`N é = ${A}`);
// }

/* Imprima no console de 1 até 10 */

// for(let i = 0; i<= 10; i++){
//     console.log(i);
// }

/* Imprima no console de 10 ate 1*/

// for(let i = 0; i>= 1; i--){
//     console.log(i);
// }



// for(let i = 0; i <= 20; i++){
//     i%2 == 0 ? console.log(i) : console.log()
// }

/* Imprima os numeros impares de 10 a 30*/

// for(let i = 10; i <= 30 ; i++){
//         i%2 !== 0 ? console.log(i) : console.log()
//     }


/* imprima de 100 a 0 decrementando de 5 em 5 */

// for(let i = 100; i >= 0; i-=5){
//     console.log(i)
// }

/* imprima a tabuada do 7 */

// let tab = 7;
// for(let n = 1; n <= 10; n++){
//     console.log(`${tab} x ${n} é = ${(tab * n)}`);
// }

/* Solicite ao usuario um numero imprima os numeros pares do 0 ate esse numero */

// let n = parseInt(prompt('digite um numero'))
// for(let i = 1; n >= i ; i++){
//     i%2 == 0 ? console.log(i) : console.log()
// }


/* solicite que o usuario digita dois numero, em seguida, imprima os numero de forma crescente*/

// let n1 = parseInt(prompt('digite o 1° numero'))
// let n2 = parseInt(prompt('digite o 2° numero'))

// if(n1 > n2){
//     for(let i = n2; i <= n1; i++){
//         console.log(i)
//     }
// } else {
//     alert('o primeiro numero deve ser maio que o segundo')
//     n1 = parseInt(prompt('digite o 1° numero'))
//     for(let i = n2; i <= n1; i++){
//         console.log(i)
//     }
// }




//Desenvolva um programa que solicite ao usuário que digite um número e, em seguida, imprima no console a soma dos números ímpares entre 1 e esse número.


// let n = prompt()
// let soma = 0
// for(let i = 1; n >= i ; i++){
//     i%2 !== 0 ? soma += i : console.log()
// }
// console.log(`a soma dos numeros de todos os numeros impares é: ${soma}`)

let n = prompt("digite um numero")
let soma = 0
for(let i = 1; n >= i ; i++){
    if(i > 1 && i < n){
    i%2 !== 0 ? soma += i : console.log()
    }
}
console.log(`a soma dos numeros de todos os numeros impares entre 1 é ${n} é: ${soma}`)