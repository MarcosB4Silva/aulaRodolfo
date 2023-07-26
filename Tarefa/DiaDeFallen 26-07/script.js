/*
1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.

2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.

3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.

4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.

5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.

6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.

7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.

8. Escreva um programa em JavaScript que exiba os números de 1 a 100 no console. Utilize uma estrutura de repetição while, do-while ou for para percorrer os números de 1 a 100 e exibir cada número no console.

9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console. */

// 01

function maiorNumero() {

    let num1 = Number(prompt('Digite o 1° número'));
    let num2 = Number(prompt('Digite o 2° número'));

    if(num1 > num2){
        console.log(`${num1} é o maior número `);
    } else {
        console.log(`${num2} é o maior número`);
    }

}
//maiorNumero()

// 02

function imparOuPar() {
    let num = Number(prompt('Digite um número para verificar se ele é par ou impar'));

    if(num%2 == 0){
        console.log(`${num} é par`);
    } else {
        console.log(`${num} é impar`);
    }

}

//imparOuPar()

//03

function numerosPares(){
    let num = Number(prompt('Digite um numero abaixo:'));
    for(let i = 1; i <= num; i++){
        if(i > 1 || i < num){ // retira o número 1 e o número digitado da analise
            if(i%2 === 0){
                console.log(`O numero ${i} é par`);
            }
        }
    }
}
//numerosPares()

//04

function tabuada(){
    let num = Number(prompt('TABUADA \nDigite um número abaixo:'));

    for(let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${(num*i)}`);
    }
}
//tabuada()

//05

function negativoPositivo() {
    let num = Number(prompt('POSITIVO OU NEGATIVO \nDigite um numero abaixo:'));

    if(num > 0){
        console.log(`${num} é positivo`);
    } else if (num < 0){
        console.log(`${num} é negativo`);
    } else {
        console.log(`Igual a zero`);
    }
}
//negativoPositivo()

//06

function vogalOuConsoante() {
    let letra = prompt('Vogal ou Consoante \nDigite uma letra abaixo para verificar:').toLowerCase();
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o'|| letra === 'u'){
        console.log(`${letra} é uma Vogal`)
    } else if (!isNaN(letra)) {
        console.log(`${letra} Não é uma letra`)
    } else {
        console.log(`${letra} é uma Consoante`)
    }
}
//vogalOuConsoante()

//07

function notaValida() {
    let nota = Number(prompt('Entre 0 e 10 \nDigite uma nota abaixo:'));

    if(nota >= 0 && nota <= 10){
        console.log(`${nota} esta entre 0 e 10`);
    } else {
        console.log('Sua nota não é Valida');
    }
}
//notaValida()

//08

function zeroPraCem() {
    let num = 0;
    while(num <= 100){
        console.log(num);
        num++;
    }
}
//zeroPraCem()

//09

function calculadora() {
    let opera = prompt('digite sua operação: \n + : adição \n - : sub \n / : div \n * : mult')
    let num = Number(prompt('Digite um número abaixo:'))
    let num2 = Number(prompt('Digite um numero abaixo:'))

    switch(opera){
        case "+":
            console.log(`${num} + ${num2} = ${(num + num2)}`)
            break
        case "*":
            console.log(`${num} * ${num2} = ${(num * num2)}`)
            break
        case "-":
            console.log(`${num} - ${num2} = ${(num - num2)}`)
            break
        case "/":
            num === 0 && num2 === 0 ? console.log('inpossivel dividir por 0') : console.log(`${num} / ${num2} = ${(num / num2)}`)
            break
    }
}
//calculadora()

//10

function numerosImpar() {
    let num = Number(prompt('Impar \nDigite um numero abaixo:'))

    for(let i = 1; i <= num; i++){
        if(i > 1 && i <  num){
            if(i%2 !== 0){
                console.log(`${i} é impar`);
            }
        }
    }
}
numerosImpar()