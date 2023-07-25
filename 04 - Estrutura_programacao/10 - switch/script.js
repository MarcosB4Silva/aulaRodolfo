//Ex.01

// let dSemana = parseInt(prompt('Digite um dia da semana \n[1] - Segunda\n[2] - Terça\n[3] - Quarta\n[4] - Quinta\n[5] - Sexta'));

// switch(dSemana){
//     case 1:
//         console.log('Segunda');
//         break;
//     case 2:
//         console.log('Terça');
//         break;
//     case 3:
//         console.log('Quarta');
//         break;
//     case 4:
//         console.log('Quinta');
//         break;
//     case 5:
//         console.log('Sexta');
//         break;
//     default:
//         console.log('fim de semana');
//         break;
// }


/* Ex.02 */

// let nomeFruta = prompt('Escolha uma fruta');

// switch(nomeFruta){
//     case 'limão':
//     case 'uva':
//     case 'laranja':
//         console.log('fruta citricas');
//         break;
//     case 'abacate':
//     case 'manga':
//         console.log('frutas tropicais');
//         break;
//     default:
//         console.log('tipo de furta não identificado');
//         break;
// }

/* ex.03 
- Receba dois numeros
- Receba a operação
- Exiba o resultado no console
*/

// let n1 = parseFloat(prompt('Digite um número'))
// let n2 = parseFloat(prompt('Digite um número'))
// let op = prompt('Digite a Operação \n [+] [-] [*] [/]')

// switch(op){
//     case "+":
//         console.log(`${n1} + ${n2} = ${(n1 + n2)}`);
//         break;
//     case "*":
//         console.log(`${n1} * ${n2} = ${(n1 * n2)}`);
//         break;
//     case "-":
//         console.log(`${n1} - ${n2} = ${(n1 - n2)}`);
//         break;
//     case "/":
//         n2 === 0 ? console.log('inpossivel dividir por 0') : console.log(`${n1} / ${n2} = ${(n1 / n2)}`);
//         break;
//     default:
//         alert('Essa operação não e valida');
//         break;
// }

/* ex.04
Escreva um programa em JavaScript que solicite ao usuário que insira um número e verifique se ele é positivo, negativo ou zero. Se o número for maior que zero, o programa deve exibir "O número é positivo". Se o número for menor que zero, o programa deve exibir "O número é negativo". Se o número for igual a zero, o programa deve exibir "O número é zero". Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".

Para implementar a verificação, utilize um switch statement. O programa deve seguir a seguinte estrutura:

Solicitar ao usuário que insira um número.
Verificar se o número é positivo, negativo ou zero utilizando um switch statement.
Exibir a mensagem correspondente ao tipo de número.
Se a entrada do usuário não for um número válido, exibir "Entrada inválida".
*/

// let num = parseFloat(prompt());

// switch(true){
//     case (num > 0):
//         console.log('positivo');
//         break;
//     case (num < 0):
//         console.log('negativo')
//         break;
//     case (num == 0):
//         console.log('numero é 0')
//         break;
//     default:
//         console.log('Entrada invalida');
//         break;
// }

/* ex.05 
Escreva um programa em JavaScript que solicite ao usuário que insira um número correspondente ao dia da semana (1-7) e exiba o nome do dia da semana correspondente à entrada do usuário. Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".


Para implementar a verificação do nome do dia da semana, utilize um switch statement. O programa deve seguir a seguinte estrutura:

Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).

Verificar qual é o número inserido pelo usuário e exibir o nome do dia da semana correspondente utilizando um switch statement.

Se a entrada do usuário não for um número válido, exibir "Entrada inválida".
*/

// let dSemana = parseInt(prompt('digite o dia da semana \n[1] - segunda\n[2] - terça\n[3] - quarta\n[4] - quinta\n[5] - sexta\n[6] - sabado\n[7] - domingo'));

// switch(dSemana){
//     case 1:
//         console.log('segunda-feira');
//         break;
//     case 2:
//         console.log('terça-feira')
//         break;
//     case 3:
//         console.log('quarta-feira')
//         break;
//     case 4:
//         console.log('quinta-feira');
//         break;
//     case 5:
//         console.log('sexta-feira')
//         break;
//     case 6:
//         console.log('sabado')
//         break;
//     case 7:
//         console.log('domingo')
//         break;
//     default:
//         console.log('Entrada invalida');
//         break;
// }




/*01 - Escreva um programa em JavaScript que declare uma variável "idade" com o valor 15. Em seguida, utilize uma estr  é maior ou igual a 18. Caso seja, imprima no console a mensagem "Pode entrar!". Caso contrário, não imprima nada. */

 

/* 02 -  Escreva um programa em JavaScript que declare uma constante "nome" com o valor "Ana".

 

Em seguida, utilize uma estrutura condicional if para verificar se o valor da constante "nome" é igual a "Ana". Caso seja, imprima no console a mensagem "Olá Ana, tudo bem?" utilizando o recurso de template literals para interpolar a variável "nome" na mensagem.

 

*/

 

/*  03 - Escreva um programa em JavaScript que declare uma constante "num" com o valor 18.
Em seguida, utilize a função Math.pow() para calcular e imprimir no console o valor de 2 elevado ao quadrado (2²), 3 elevado ao quadrado (3²) e "num" elevado ao quadrado ("num"²).
*/

 

/* 04 - Imagine que alguém está dirigindo um carro em uma estrada, cujo limite de velocidade é de 80 km/h. Se essa pessoa estiver dirigindo a 55 km/h, não há problema e ela não receberá uma multa por excesso de velocidade. No entanto, se ela estiver dirigindo a uma velocidade maior que 80 km/h, ela será multada.

 

O programa em JavaScript simula essa situação, verificando se a velocidade do veículo é maior que 80 km/h e imprimindo a mensagem "Levou multa" caso seja, ou "Não levou multa" caso contrário. Isso pode ser útil para os motoristas se conscientizarem sobre a importância de respeitar os limites de velocidade e evitar multas e acidentes.
*/

 

/* 05 - Escreva um programa em JavaScript que declare uma variável "idade" com o valor 23 e uma variável "cnh" com o valor false.

 

Em seguida, utilize uma estrutura condicional if-else-if para verificar se a idade é maior ou igual a 18 e se a pessoa possui CNH. Caso ambas as condições sejam verdadeiras, imprima no console a mensagem "Sim, pode dirigir".

 

Caso a idade seja maior ou igual a 18 mas a pessoa não possui CNH, imprima no console a mensagem "Não pode dirigir, mas pode fazer a CNH".

 

Caso contrário, ou seja, se a pessoa tiver menos de 18 anos, imprima no console a mensagem "Não pode dirigir".

 

Certifique-se de que a estrutura condicional esteja completa, com o uso das chaves {} para delimitar o bloco de código a ser executado em caso de cada condição.
*/

 

/* 06 - Escreva um programa em JavaScript que utilize a estrutura de repetição while para imprimir no console os números de 0 a 10.

 

Certifique-se de utilizar uma variável de controle "i" inicializada em 0 e incrementada em 1 a cada iteração, verificando se o valor de "i" é menor ou igual a 10 para evitar um loop infinito. Utilize a função console.log() para imprimir os valores de "i" em cada iteração do loop.
*/

 

// 07 - Crie um programa em Javascript que conte de 100 até 50 em ordem decrescente e imprima cada número no console. Utilize um laço de repetição for para realizar essa tarefa.

 

/* 08 - Crie um programa em Javascript que conte de 0 até 50 e imprima no console se cada número é par ou ímpar. Utilize um laço de repetição for para percorrer cada número de 0 a 50 e utilize uma estrutura condicional if...else para verificar se o número é par ou ímpar. Caso o número seja par, o programa deve imprimir a mensagem "O número X é par", onde X é o número em questão. Caso o número seja ímpar, o programa deve imprimir a mensagem "O número X é ímpar". */

 


/* 09 - Crie um programa em Javascript que verifique se um número é primo ou não. O número a ser verificado deve ser armazenado em uma variável chamada num. O programa deve contar quantas divisões exatas o número tem utilizando um laço de repetição for que percorre todos os números de 1 até o próprio número. Caso o número seja divisível por um desses números, aumenta-se o valor da variável divisoes. Ao final do laço, utiliza-se uma estrutura condicional if...else para verificar se o número é primo ou não. Se o número tiver exatamente duas divisões exatas (1 e ele mesmo), o programa deve imprimir a mensagem "O número X é primo", onde X é o número em questão. Caso contrário, o programa deve imprimir a mensagem "O número X não é primo".*/

