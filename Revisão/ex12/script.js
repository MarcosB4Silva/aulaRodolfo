let maior = 0
for(num = 0; num < 5; num++){
    lista = prompt()
    if(lista < 0){
        maior = lista
    }
    if(lista > maior){
        maior = lista;
    }
}
console.log(maior)
