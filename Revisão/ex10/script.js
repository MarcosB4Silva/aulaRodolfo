//leia um nome e uma idade e decidade se pode ou não dirigir
let nome = prompt("digite seu nome")
let idade = prompt("digite sua idade")

idade >= 18 ? alert(`Parabéns ${nome} você está habilitado`) : alert(`${nome}você não está habilitado a dirigir`)