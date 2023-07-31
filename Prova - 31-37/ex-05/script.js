// 05 - Imagine que você é um vendedor e precisa calcular o valor final da compra de um cliente levando em consideração um desconto. Escreva um programa que solicite ao usuário que informe o nome do cliente, o valor total da compra e a porcentagem de desconto utilizando a função prompt. Em seguida, calcule o valor final da compra com o desconto aplicado e exiba uma mensagem de alerta contendo o nome do cliente e o valor final da compra. 

let nome = prompt('Digite o nome do cliente');
let valorCompra = Number(prompt('Digite o valor total da compra'));
let desconto = Number(prompt('digite o valor do desconto de 0 a 100'));

let valorFinal = (valorCompra*(desconto/100))

alert(`Nome: ${nome} \nValor total da compra com desconto:R$${(valorCompra-valorFinal)} `)