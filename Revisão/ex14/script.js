/* faça um algoritimo que pergunte ao usuario um operador e um número e depois exiba sua respectiva tabuada */

let opera = prompt('digite sua operação: \n + : adição \n - : sub \n / : div \n * : mult')
let num = parseInt(prompt('digite o número'))

for(i = 0; i <= 10; i++){
   switch(opera){
    case "+":
        console.log(`${num} + ${i} = ${(num + i)}`)
        break
    case "*":
        console.log(`${num} * ${i} = ${(num * i)}`)
        break
    case "-":
        console.log(`${num} - ${i} = ${(num - i)}`)
        break
    case "/":
        num === 0 && i === 0 ? console.log('inpossivel dividir por 0') : console.log(`${num} / ${i} = ${(num / i)}`)
        break
   }
}