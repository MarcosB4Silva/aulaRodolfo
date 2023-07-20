// notas 
let n1 = parseInt(prompt())
let n2 = parseInt(prompt())
let n3 = parseInt(prompt())
let n4 = parseInt(prompt())

media = ((n1+n2+n3+n4)/4);

if(media >= 7){
    alert(`Aprovado, sua media é: ${media.toFixed}`);
}else if( media > 5){
    alert(`Recuperação, sua media é: ${media.toFixed}`);
} else{
    alert(`Reprovado, sua media é: ${media.toFixed}`);
}

// desafio + 25 freecodecamp