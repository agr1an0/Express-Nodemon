function vetor(vetorA) {
    let resp = ''
    let vetorLenght = vetorA.length
    for (let i = 0; i < vetorLenght; i++) {
    let b = vetorA[i] * vetorA[i]
    resp += ("o quadrado do " + (i + 1) + "° é " + b)
    resp += ', '
}
return resp
} //prefiro array :v
vetor([1,2,3,4,5,6,7,8,9,10])
export {vetor}