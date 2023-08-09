function imprConsole (){
    console.log('Olá Jovem!');
}

function imprNum (num){
    console.log(`O número é: ${num}`);
}
//imprNum(2)


// desafio : receba um nome e imprima
function recebeNome(nome){
    console.log(`Seu nome é: ${nome}`);
}
// recebeNome(prompt());

//desafio: receba um numero (sem prompt) e imprima o dobro dele
function dobro(num){
    num *= 2;
    console.log(num);
}
//dobro(2)

// desafio: crie uma função que retorne um numero elevado a ele msm
function elevado(num){
    let potencia = Math.pow(num,num);
    console.log(`${num} elevado a ele mesmo é: ${potencia}`);
}
//elevado(3)

//função Anonima
let numAleatorio = function (){
    console.log(`Número aleatorio: ${(Math.random()*10).toFixed(0)}`);
} 

const nAleatorio = () => console.log(`Número aleatorio: ${(Math.random()*10).toFixed(0)}`);
nAleatorio();

//desafio: função que multiplique 3 numeros
function multiplica (a,b,c) {
    console.log(`${a} x ${b} x ${c} = ${a*b*c}`);
}
multiplica(7,4,6);

const mult = (a,b,c) => console.log(`${a} x ${b} x ${c} = ${a*b*c}`);
mult(1,2,3);
mult(5,8,4);
mult(7,9,10);
