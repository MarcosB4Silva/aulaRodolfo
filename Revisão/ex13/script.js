/* faça um progama que leia 5 números e mostre a soma da media deles*/

soma = 0

for(i = 0; i < 5; i++){
    num = parseFloat(prompt('digite um número'))
    soma += num
}
alert(`a soma dos números é : ${soma} \ne a media deles é : ${(soma/i).toFixed(2)}`)