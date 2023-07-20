let valor = parseFloat(prompt("digite o valor da compra"))
let codCompra = parseInt(prompt("Digite o codigo de pagamento"))

if(codCompra == 1){
    desconto1 = (valor*0.9)
    console.log(desconto1)
} else if(codCompra == 2){
    desconto2 = (valor*0.85)
    console.log(desconto2)
}else if(codCompra == 3){
    parcela = (valor/2)
    console.log(parcela)
} else if(codCompra == 4){
    parceJuros = (valor/parseFloat(prompt("digite o numero de parcelas")))
    console.log("Valor das parcelas :",parceJuros+(parceJuros*0.1), "\n valor total mais juros :"+(valor+(valor*0.1)))
}else {
    alert("Esse Codigo não e valido")
}




