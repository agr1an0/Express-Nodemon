function variaveis(preco, quantidade) {
//processamento
let valorPedido = (preco * quantidade)
//saida
let resp = (valorPedido + "$ ao total")
return resp
}
export {variaveis}