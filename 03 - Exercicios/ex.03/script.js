/* 03 - Escreva um programa em Javascript que realize três comparações com boolean. Realize uma comparação utilizando o operador maior que (>) para comparar 12 e 5, outra comparação utilizando o operador menor ou igual (<=) para comparar 4 e 4, e por fim, uma comparação utilizando o operador de diferença (!=) para comparar as strings "Jorge" e "João".

Em seguida, utilize o método console.log() para exibir o resultado de cada uma das comparações no console do navegador.

Lembre-se de que é importante utilizar diferentes operadores de comparação e definir valores que possam ser comparados de forma lógica.
*/


var a = 12
var b = 5
var c = 4
var d = 4

if(a > b){
    console.log("12 é maior que 5")
} else {
    console.log(" não é maior")
}

if(c >= d){
    console.log("4 é igual a 4")
} else {
    console.log(" não")
}

var jeorge = "jeorge"
var joão = "joão"

console.log(jeorge != joão)