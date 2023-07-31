// 03- Imagine que você é um professor e precisa calcular a média final das notas de um aluno. Escreva um programa que solicite ao usuário que informe as 4 notas do aluno utilizando a função prompt. Em seguida, calcule a média final e exiba uma mensagem de alerta contendo o valor da média final. 

let n1 = Number(prompt('nota 1'));
let n2 = Number(prompt('nota 2'));
let n3 = Number(prompt('nota 3'));
let n4 = Number(prompt('nota 4'));

let media = ((n1 + n2 + n3 + n4) / 4)

alert(`A media final do aluno é: ${media}`)