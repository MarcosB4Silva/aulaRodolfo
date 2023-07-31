// 04 - Imagine que você é um professor e precisa calcular a média final das notas de um aluno e informar a sua situação (aprovado, recuperação ou reprovado). Escreva um programa que solicite ao usuário que informe o nome do aluno e as 4 notas utilizando a função prompt. Em seguida, calcule a média final e armazene o resultado na variável mediaFinal. Utilize uma estrutura condicional para verificar a situação do aluno e exiba uma mensagem de alerta contendo o nome do aluno, a média final em pontos e a sua situação. 

let nome = prompt('Digite o nome do aluno');
let n1 = Number(prompt('nota 1'));
let n2 = Number(prompt('nota 2'));
let n3 = Number(prompt('nota 3'));
let n4 = Number(prompt('nota 4'));

let mediaFinal = ((n1+n2+n3+n4)/4)

if(mediaFinal >= 7){
    alert(`nome: ${nome} \nmedia: ${mediaFinal} situação: aprovado`)
} else if (mediaFinal >= 5){
    alert(`nome: ${nome} \nmedia: ${mediaFinal} situação: recuperação`)
} else{
    alert(`nome: ${nome} \nmedia: ${mediaFinal} situação: reprovado`)
}
