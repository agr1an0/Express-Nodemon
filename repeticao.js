function repeticao(num) {
let numAnt = 1
let numAtual = numAnt
let numProx = 0
let resp = ' '

for (let i = 1; i <= num; i++) {
    numProx = numAnt + numAtual
    numAnt = numProx - numAtual
    resp += (numAnt)
    numAnt = numAtual
    numAtual = numProx
    resp += ' '
}
return resp
}
export {repeticao}