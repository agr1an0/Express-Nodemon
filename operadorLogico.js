function operadorLogico(primeiro, segundo, terceiro) {
    let resp = "bug"
    if (primeiro < segundo && primeiro < terceiro) {
         resp = 'o primeiro é o menor'
    } else if (segundo < primeiro && segundo < terceiro) {
         resp = 'o segundo é o menor'
    } else if (terceiro < primeiro && terceiro < segundo) {
         resp = 'o terceiro é o menor'
    } else { resp = "erro"}
        return resp
}
export {operadorLogico}